"use client";
import { useState, useEffect, useRef } from "react";
import styles from "../styles";

/**
 * ===========================================
 * 캐시 관리 전역 변수들
 * ===========================================
 */
// 전역 캐시 객체 - 메모리에 데이터 임시 저장
const globalCache = {};
// 중복 API 요청 방지를 위한 요청 추적 객체
const pendingRequests = {};

/**
 * localStorage에서 캐시된 Notion 데이터를 로드하는 함수
 * @returns {Object} 캐시된 데이터 객체 또는 빈 객체
 */
const loadCacheFromStorage = () => {
  // 서버 사이드 렌더링 환경에서는 localStorage 접근 불가
  if (typeof window === "undefined") return {};

  try {
    const savedCache = localStorage.getItem("notionCache");
    return savedCache ? JSON.parse(savedCache) : {};
  } catch (e) {
    console.error("캐시 로드 실패:", e);
    return {};
  }
};

/**
 * localStorage에 캐시 데이터를 저장하는 함수
 * @param {Object} cache - 저장할 캐시 데이터
 */
const saveCacheToStorage = (cache) => {
  try {
    localStorage.setItem("notionCache", JSON.stringify(cache));
  } catch (e) {
    console.error("캐시 저장 실패:", e);
  }
};

/**
 * ===========================================
 * NotionPage 메인 컴포넌트
 * ===========================================
 * Notion API를 통해 프로젝트 데이터를 가져와 표시하는 컴포넌트
 * @param {string} notionProjectName - 표시할 Notion 프로젝트 이름
 */
const NotionPage = ({ notionProjectName }) => {
  // ===== 상태 관리 =====
  const [project, setProject] = useState(null); // 프로젝트 메타데이터
  const [blocks, setBlocks] = useState([]); // Notion 페이지 블록 데이터
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const isInitialMount = useRef(true); // 첫 렌더링 확인용

  /**
   * ===========================================
   * 데이터 로딩 메인 로직
   * ===========================================
   */
  useEffect(() => {
    // 첫 번째 렌더링에서만 실행 (중복 실행 방지)
    if (isInitialMount.current) {
      isInitialMount.current = false;

      // 1. 캐시된 데이터가 있는지 확인
      const localCache = loadCacheFromStorage();

      const cachedData = localCache[notionProjectName];

      // 캐시 만료 시간 체크 (1시간 = 3600000ms)
      const CACHE_EXPIRY_TIME = 3600000; // 1시간
      const now = Date.now();

      if (
        cachedData &&
        cachedData.timestamp &&
        now - cachedData.timestamp < CACHE_EXPIRY_TIME
      ) {
        // 캐시된 데이터가 있고 만료되지 않았으면 바로 사용
        setProject(cachedData.project);
        setBlocks(cachedData.blocks);
        setLoading(false);
        return;
      }

      // 2. 동일한 프로젝트에 대한 API 요청이 진행 중인지 확인
      if (pendingRequests[notionProjectName]) {
        return; // 중복 요청 방지
      }

      /**
       * Notion API로부터 데이터를 가져오는 비동기 함수
       */
      const fetchData = async () => {
        // 요청 시작 표시
        pendingRequests[notionProjectName] = true;

        try {
          setLoading(true);
          setError(null);

          // === STEP 1: 프로젝트 메타데이터 가져오기 ===
          const projectResponse = await fetch(
            `/api/notion-project?name=${encodeURIComponent(notionProjectName)}`
          );

          if (!projectResponse.ok) {
            throw new Error(
              `프로젝트 API 요청 실패: ${projectResponse.status}`
            );
          }

          const projectData = await projectResponse.json();
          setProject(projectData.project);

          // === STEP 2: 페이지 블록 내용 가져오기 ===
          let blocksData = { blocks: [] };

          // 프로젝트에 페이지 ID가 있는 경우에만 블록 내용 요청
          if (projectData.rawData && projectData.rawData.id) {
            const pageId = projectData.rawData.id;
            const blocksResponse = await fetch(
              `/api/notion-blocks?pageId=${pageId}`
            );

            if (blocksResponse.ok) {
              blocksData = await blocksResponse.json();
              setBlocks(blocksData.blocks || []);
            }
          }

          // === STEP 3: 가져온 데이터를 캐시에 저장 ===
          const updatedCache = { ...loadCacheFromStorage() };
          updatedCache[notionProjectName] = {
            project: projectData.project,
            blocks: blocksData.blocks || [],
            timestamp: Date.now(), // 캐시 생성 시간
          };
          saveCacheToStorage(updatedCache);
        } catch (err) {
          console.error("데이터 가져오기 실패:", err);
          setError(err.message);
        } finally {
          setLoading(false);
          pendingRequests[notionProjectName] = false; // 요청 완료 표시
        }
      };

      // 데이터 가져오기 실행
      fetchData();
    }
  }, [notionProjectName]); // notionProjectName이 변경될 때만 재실행

  /**
   * ===========================================
   * Notion 블록 렌더링 함수
   * ===========================================
   * Notion의 다양한 블록 타입을 React 컴포넌트로 변환
   * @param {Object} block - Notion 블록 객체
   * @returns {JSX.Element} 렌더링된 React 컴포넌트
   */
  const renderBlock = (block) => {
    switch (block.type) {
      // 일반 텍스트 단락
      case "paragraph":
        return (
          <p className="mb-8 text-gray-500 dark:text-gray-400">{block.text}</p>
        );

      // 제목들 (크기별로 구분)
      case "heading_1":
        return <h1 className="text-2xl font-bold mb-4">{block.text}</h1>;
      case "heading_2":
        return <h2 className="text-xl font-bold mb-3">{block.text}</h2>;
      case "heading_3":
        return <h3 className="text-lg font-bold mb-2">{block.text}</h3>;

      // 리스트 아이템들
      case "bulleted_list_item":
        return <li className="ml-6 list-disc mb-1">{block.text}</li>;
      case "numbered_list_item":
        return <li className="ml-6 list-decimal mb-1">{block.text}</li>;

      // 이미지 블록
      case "image":
        return (
          <figure className="mb-4">
            <img
              src={block.url}
              alt={block.caption}
              className="max-w-full h-auto rounded"
            />
            {/* 캡션이 있으면 표시 */}
            {block.caption && (
              <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );

      // 코드 블록
      case "code":
        return (
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 overflow-x-auto">
            <code>{block.text}</code>
          </pre>
        );

      // 인용구 블록
      case "quote":
        return (
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic mb-4">
            {block.text}
          </blockquote>
        );

      // 구분선
      case "divider":
        return <hr className="my-4" />;

      // 기타 블록들은 단순 텍스트로 표시
      default:
        return <div className="mb-2">{block.text || ""}</div>;
    }
  };

  /**
   * localStorage에서 캐시를 삭제하는 함수
   * 개발/디버깅 용도로 사용
   */
  const clearCache = () => {
    try {
      localStorage.removeItem("notionCache");
      alert("캐시가 성공적으로 삭제되었습니다. 페이지를 새로고침하세요.");
    } catch (e) {
      console.error("캐시 삭제 실패:", e);
      alert("캐시 삭제에 실패했습니다.");
    }
  };

  /**
   * ===========================================
   * 메인 렌더링 부분
   * ===========================================
   */
  return (
    <div className="w-[90%] sm:w-[70%] h-full border-white pt-[56px] pb-[56px] relative">
      <div className="container mx-auto">
        {/* ===== 로딩 상태 UI ===== */}
        {loading && (
          <>
            {/* 로켓 발사 애니메이션 */}
            <div className="absolute inset-0 flex justify-center items-center bg-white/50 dark:bg-black/50 z-10">
              <div className="relative flex flex-col items-center">
                {/* 로켓 */}
                <div className="rocket-container mb-4">
                  <div className="rocket animate-rocket-launch">🚀</div>
                  {/* 로켓 연기/불꽃 효과 */}
                  <div className="rocket-fire animate-fire">
                    <div className="fire-particle"></div>
                    <div className="fire-particle"></div>
                    <div className="fire-particle"></div>
                  </div>
                </div>
                {/* 로딩 텍스트 */}
                <p className="text-blue-600 dark:text-blue-400 font-medium animate-pulse">
                  데이터를 불러오는 중...
                </p>
              </div>
            </div>

            {/* 로켓 애니메이션 CSS */}
            <style jsx>{`
              .rocket-container {
                position: relative;
                height: 80px;
                width: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .rocket {
                font-size: 40px;
                position: relative;
                z-index: 2;
                transform-origin: center;
              }

              @keyframes rocket-launch {
                0% {
                  transform: translateY(0px) rotate(0deg);
                }
                25% {
                  transform: translateY(-5px) rotate(-5deg);
                }
                50% {
                  transform: translateY(-10px) rotate(5deg);
                }
                75% {
                  transform: translateY(-5px) rotate(-2deg);
                }
                100% {
                  transform: translateY(0px) rotate(0deg);
                }
              }

              .animate-rocket-launch {
                animation: rocket-launch 1.5s ease-in-out infinite;
              }

              .rocket-fire {
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 20px;
                height: 30px;
              }

              .fire-particle {
                position: absolute;
                width: 4px;
                height: 8px;
                background: linear-gradient(45deg, #ff6b35, #f7931e, #ffcc02);
                border-radius: 2px;
                animation: fire-flicker 0.8s ease-in-out infinite;
              }

              .fire-particle:nth-child(1) {
                left: 50%;
                transform: translateX(-50%);
                animation-delay: 0s;
              }

              .fire-particle:nth-child(2) {
                left: 30%;
                animation-delay: 0.2s;
              }

              .fire-particle:nth-child(3) {
                left: 70%;
                animation-delay: 0.4s;
              }

              @keyframes fire-flicker {
                0%,
                100% {
                  opacity: 1;
                  transform: translateY(0px) scaleY(1);
                }
                50% {
                  opacity: 0.7;
                  transform: translateY(-5px) scaleY(1.2);
                }
              }

              .animate-fire {
                animation: fire-intensity 1.5s ease-in-out infinite;
              }

              @keyframes fire-intensity {
                0%,
                100% {
                  filter: brightness(1);
                }
                50% {
                  filter: brightness(1.3);
                }
              }
            `}</style>

            {/* 스켈레톤 UI - 로딩 중 표시할 placeholder */}
            <div className="bg-white dark:bg-black shadow-md rounded p-6 text-black dark:text-white opacity-60">
              {/* 제목 영역 스켈레톤 */}
              <div className="h-[40px] bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-[32px] animate-pulse"></div>

              {/* 프로젝트 정보 리스트 스켈레톤 */}
              <ul className="mb-[58px]">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li
                    key={item}
                    className="flex items-center py-4 border-b border-gray-100 dark:border-gray-800"
                  >
                    <div className="flex items-center">
                      <div className="w-[24px] h-[24px] rounded bg-gray-200 dark:bg-gray-700 animate-pulse mr-2"></div>
                      <div className="h-[20px] bg-gray-200 dark:bg-gray-700 rounded w-[100px] animate-pulse"></div>
                    </div>
                    <div className="h-[20px] bg-gray-200 dark:bg-gray-700 rounded w-[200px] animate-pulse"></div>
                  </li>
                ))}
              </ul>

              {/* 블록 콘텐츠 영역 스켈레톤 */}
              <div className="mt-8">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((block) => (
                    <div
                      key={block}
                      className="h-[20px] bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"
                    ></div>
                  ))}
                  <div className="h-[100px] bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
                  {[1, 2, 3].map((block) => (
                    <div
                      key={block}
                      className="h-[20px] bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* ===== 에러 상태 UI ===== */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 mb-4">
            <p>오류: {error}</p>
          </div>
        )}

        {/* ===== 메인 콘텐츠 영역 ===== */}
        {project && !loading && (
          <div className="bg-white dark:bg-black shadow-md rounded p-6 text-black dark:text-white">
            {/* 프로젝트 제목 */}
            <h1 className="text-[24px] sm:text-[32px] font-bold mb-[32px]">
              {notionProjectName}
            </h1>

            {/* 프로젝트 메타데이터 정보 리스트 */}
            <ul className="mb-[58px]">
              {/* 주제 정보 */}
              <li className={`${styles.exploreModalList}`}>
                <div className={`${styles.exploreModalListTitle}`}>
                  <i className="w-[24px] h-[24px] cursor-pointer block">
                    <img
                      src="/modal_title-ico01.svg"
                      alt="title-icon"
                      className="w-full h-full object-cover"
                    />
                  </i>
                  <span className="inline-block w-auto min-w-[120px]">
                    주제
                  </span>
                </div>
                <div className={`${styles.exploreModalListContent}`}>
                  {project.주제}
                </div>
              </li>

              {/* 프로젝트 유형 정보 */}
              <li className={`${styles.exploreModalList}`}>
                <div className={`${styles.exploreModalListTitle}`}>
                  <i className="w-[24px] h-[24px] cursor-pointer block">
                    <img
                      src="/modal_title-ico01.svg"
                      alt="title-icon"
                      className="w-full h-full object-cover"
                    />
                  </i>
                  <span className="inline-block w-auto min-w-[120px]">
                    프로젝트 유형
                  </span>
                </div>
                <div className={`${styles.exploreModalListContent}`}>
                  {/* Multi-select 배열을 쉼표로 구분하여 표시 */}
                  {project["Multi-select"] &&
                    project["Multi-select"].join(", ")}
                </div>
              </li>

              {/* 프로젝트 기간 정보 */}
              <li className={`${styles.exploreModalList}`}>
                <div className={`${styles.exploreModalListTitle}`}>
                  <i className="w-[24px] h-[24px] cursor-pointer block">
                    <img
                      src="/modal_title-ico01.svg"
                      alt="title-icon"
                      className="w-full h-full object-cover"
                    />
                  </i>
                  <span className="inline-block w-auto min-w-[120px]">
                    기간
                  </span>
                </div>
                <div className={`${styles.exploreModalListContent}`}>
                  {project.기간}
                </div>
              </li>

              {/* 관련 링크 정보 */}
              <li className={`${styles.exploreModalList}`}>
                <div className={`${styles.exploreModalListTitle}`}>
                  <i className="w-[24px] h-[24px] cursor-pointer block">
                    <img
                      src="/modal_title-ico01.svg"
                      alt="title-icon"
                      className="w-full h-full object-cover"
                    />
                  </i>
                  <span className="inline-block w-auto min-w-[120px]">
                    링크
                  </span>
                </div>
                <div className={`${styles.exploreModalListContent}`}>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline cursor-pointer transition-colors duration-200 break-all"
                    >
                      {project.link}
                    </a>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">
                      링크가 없습니다
                    </span>
                  )}
                </div>
              </li>

              {/* PDF 파일 정보 */}
              <li className={`${styles.exploreModalList}`}>
                <div className={`${styles.exploreModalListTitle}`}>
                  <i className="w-[24px] h-[24px] cursor-pointer block">
                    <img
                      src="/modal_title-ico01.svg"
                      alt="title-icon"
                      className="w-full h-full object-cover"
                    />
                  </i>
                  <span className="inline-block w-auto min-w-[120px]">
                    Open With PDF
                  </span>
                </div>
                <div className={`${styles.exploreModalListContent}`}>
                  {/* PDF 파일들을 클릭 가능한 다운로드 링크로 표시 */}
                  {project["Open With PDF"] &&
                  project["Open With PDF"].length > 0 ? (
                    project["Open With PDF"].map((pdfFile, index) => (
                      <span key={index}>
                        <a
                          href={
                            typeof pdfFile === "object" ? pdfFile.url : pdfFile
                          }
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline cursor-pointer transition-colors duration-200"
                        >
                          {typeof pdfFile === "object" ? pdfFile.name : pdfFile}
                        </a>
                        {/* 마지막 파일이 아니면 쉼표 추가 */}
                        {index < project["Open With PDF"].length - 1 && ", "}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">
                      PDF 파일이 없습니다
                    </span>
                  )}
                </div>
              </li>
            </ul>

            {/* ===== Notion 페이지 블록 콘텐츠 영역 ===== */}
            {blocks.length > 0 && (
              <div className="mt-8">
                <div className="prose max-w-none dark:prose-invert">
                  {/* 각 블록을 순서대로 렌더링 */}
                  {blocks.map((block) => (
                    <div key={block.id}>{renderBlock(block)}</div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== 개발용 캐시 삭제 버튼 ===== */}
            {/* {!loading && (
              <button
                onClick={clearCache}
                className="mt-8 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                캐시 지우기
              </button>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotionPage;
