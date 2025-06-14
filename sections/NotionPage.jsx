"use client";
import { useState, useEffect, useRef } from "react";
import styles from "../styles";

// 전역 캐시 및 요청 추적 객체
const globalCache = {};
const pendingRequests = {};

// localStorage에서 캐시 데이터 가져오기
const loadCacheFromStorage = () => {
  if (typeof window === "undefined") return {}; // 서버 사이드에서는 빈 객체 반환

  try {
    const savedCache = localStorage.getItem("notionCache");
    return savedCache ? JSON.parse(savedCache) : {};
  } catch (e) {
    console.error("캐시 로드 실패:", e);
    return {};
  }
};

// localStorage에 캐시 데이터 저장
const saveCacheToStorage = (cache) => {
  try {
    localStorage.setItem("notionCache", JSON.stringify(cache));
  } catch (e) {
    console.error("캐시 저장 실패:", e);
  }
};

const NotionPage = ({ notionProjectName }) => {
  const [project, setProject] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openToggles, setOpenToggles] = useState({});
  const isInitialMount = useRef(true);
  const [tableOfContents, setTableOfContents] = useState([]);
  const [activeHeading, setActiveHeading] = useState(null);

  useEffect(() => {
    // 첫 번째 렌더링 완료 후에만 실행
    if (isInitialMount.current) {
      isInitialMount.current = false;

      // 캐시 확인
      const localCache = loadCacheFromStorage();

      if (localCache[notionProjectName]) {
        setProject(localCache[notionProjectName].project);
        setBlocks(localCache[notionProjectName].blocks);
        setLoading(false);
        return;
      }

      // 동일한 프로젝트에 대한 요청이 진행 중이면 중단
      if (pendingRequests[notionProjectName]) {
        return;
      }

      const fetchData = async () => {
        pendingRequests[notionProjectName] = true;

        try {
          setLoading(true);
          setError(null);

          // 프로젝트 정보 가져오기
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

          let blocksData = { blocks: [] };

          // 페이지 ID가 있으면 블록 내용 가져오기
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

          // 데이터 저장 부분
          const updatedCache = { ...loadCacheFromStorage() };
          updatedCache[notionProjectName] = {
            project: projectData.project,
            blocks: blocksData.blocks || [],
            timestamp: Date.now(),
          };
          saveCacheToStorage(updatedCache);
        } catch (err) {
          console.error("데이터 가져오기 실패:", err);
          setError(err.message);
        } finally {
          setLoading(false);
          pendingRequests[notionProjectName] = false;
        }
      };

      fetchData();
    }
  }, [notionProjectName]);

  // 블록이 로드된 후 목차를 생성
  useEffect(() => {
    if (blocks.length > 0) {
      const headings = blocks
        .filter(
          (block) =>
            block.type === "heading_1" ||
            block.type === "heading_2" ||
            block.type === "heading_3"
        )
        .map((block, index) => ({
          id: `heading-${block.id}`,
          text: block.text,
          level: parseInt(block.type.split("_")[1]),
          type: block.type,
        }));

      setTableOfContents(headings);
    }
  }, [blocks]);

  // 스크롤 감지하여 현재 활성화된 헤딩 업데이트
  useEffect(() => {
    if (tableOfContents.length === 0) return;

    const handleScroll = () => {
      const headingElements = tableOfContents.map((heading) =>
        document.getElementById(heading.id)
      );

      const currentPositions = headingElements.map((element) => {
        if (!element) return -Infinity;
        return element.getBoundingClientRect().top;
      });

      // 화면 상단에 가장 가까운(단, 상단 위로 넘어가지 않은) 헤딩 찾기
      const currentHeadingIndex = currentPositions.findIndex(
        (pos) => pos > 100
      );
      const activeIndex =
        currentHeadingIndex === -1
          ? currentPositions.length - 1
          : currentHeadingIndex === 0
          ? 0
          : currentHeadingIndex - 1;

      if (activeIndex !== -1 && tableOfContents[activeIndex]) {
        setActiveHeading(tableOfContents[activeIndex].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 로드 시 실행

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tableOfContents]);

  // 목차 항목 클릭 시 해당 헤딩으로 스크롤
  const scrollToHeading = (headingId) => {
    const element = document.getElementById(headingId);
    if (element) {
      const offset = 100; // 헤딩 위에 약간의 여백 추가
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // 토글 상태 변경 함수
  const handleToggle = (toggleId) => {
    console.log("토글 클릭:", toggleId, "현재 상태:", openToggles[toggleId]);
    setOpenToggles((prev) => ({
      ...prev,
      [toggleId]: !prev[toggleId],
    }));
  };

  // 블록 렌더링 함수
  const renderBlock = (block) => {
    switch (block.type) {
      case "paragraph":
        return <p className="mb-4">{block.text}</p>;
      case "heading_1":
        return (
          <h1
            id={`heading-${block.id}`}
            className="text-2xl font-bold mb-4 scroll-mt-24"
          >
            {block.text}
          </h1>
        );
      case "heading_2":
        return (
          <h2
            id={`heading-${block.id}`}
            className="text-xl font-bold mb-3 scroll-mt-24"
          >
            {block.text}
          </h2>
        );
      case "heading_3":
        return (
          <h3
            id={`heading-${block.id}`}
            className="text-lg font-bold mb-2 scroll-mt-24"
          >
            {block.text}
          </h3>
        );
      case "bulleted_list_item":
        return <li className="ml-6 list-disc mb-1">{block.text}</li>;
      case "numbered_list_item":
        return <li className="ml-6 list-decimal mb-1">{block.text}</li>;
      case "to_do":
        return (
          <div className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={block.checked}
              readOnly
              className="mr-2"
            />
            <span>{block.text}</span>
          </div>
        );
      case "toggle":
        const isOpen = openToggles[block.id] || false;
        console.log(
          "토글 렌더링:",
          block.id,
          "열림 상태:",
          isOpen,
          "자식:",
          block.children
        );
        return (
          <div className="mb-2">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleToggle(block.id)}
            >
              <span
                className="mr-2 transition-transform duration-200"
                style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                ▶
              </span>
              <span className="font-medium">{block.text}</span>
            </div>
            {isOpen && block.children && block.children.length > 0 ? (
              <div className="pl-6 mt-1 border-l-2 border-gray-200 dark:border-gray-700">
                {block.children.map((childBlock) => (
                  <div key={childBlock.id}>{renderBlock(childBlock)}</div>
                ))}
              </div>
            ) : (
              isOpen && (
                <div className="pl-6 mt-1 text-gray-500 dark:text-gray-400">
                  비어 있는 토글입니다
                </div>
              )
            )}
          </div>
        );
      case "image":
        return (
          <figure className="mb-4">
            <img
              src={block.url}
              alt={block.caption}
              className="max-w-full h-auto rounded"
            />
            {block.caption && (
              <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      case "code":
        return (
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 overflow-x-auto">
            <code>{block.text}</code>
          </pre>
        );
      case "quote":
        return (
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic mb-4">
            {block.text}
          </blockquote>
        );
      case "divider":
        return <hr className="my-4" />;
      case "callout":
        return (
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md flex items-start mb-4">
            <span className="mr-2 text-lg">{block.icon}</span>
            <div>{block.text}</div>
          </div>
        );
      default:
        return (
          <div className="mb-2">{block.text || `[${block.type} 블록]`}</div>
        );
    }
  };

  // 컴포넌트 내에 함수 추가
  const clearCache = () => {
    try {
      localStorage.removeItem("notionCache");
      alert("캐시가 성공적으로 삭제되었습니다. 페이지를 새로고침하세요.");
    } catch (e) {
      console.error("캐시 삭제 실패:", e);
      alert("캐시 삭제에 실패했습니다.");
    }
  };

  return (
    <div className="w-[90%] sm:w-[70%] h-full border-white pt-[56px] pb-[56px] relative">
      <div className="container mx-auto">
        {loading && (
          <>
            <div className="absolute inset-0 flex justify-center items-center bg-white/50 dark:bg-black/50 z-10">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
            </div>

            {/* 스켈레톤 UI */}
            <div className="bg-white dark:bg-black shadow-md rounded p-6 text-black dark:text-white opacity-60">
              {/* 제목 스켈레톤 */}
              <div className="h-[40px] bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-[32px] animate-pulse"></div>

              {/* 리스트 스켈레톤 */}
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

              {/* 블록 콘텐츠 스켈레톤 */}
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

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 mb-4">
            <p>오류: {error}</p>
          </div>
        )}

        {project && !loading && (
          <div className="flex flex-col md:flex-row">
            {/* 메인 콘텐츠 영역 */}
            <div className="w-full md:w-3/4 bg-white dark:bg-black shadow-md rounded p-6 text-black dark:text-white">
              <h1 className="text-[24px] sm:text-[32px] font-bold mb-[32px]">
                {notionProjectName}
              </h1>
              <ul className="mb-[58px]">
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
                    {project.Name}
                  </div>
                </li>
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
                    {project["Multi-select"] &&
                      project["Multi-select"].join(", ")}
                  </div>
                </li>

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
                    {project.link}
                  </div>
                </li>
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
                    {project["Open With PDF"] &&
                      project["Open With PDF"].join(", ")}
                  </div>
                </li>
              </ul>

              {/* 페이지 블록 내용 표시 */}
              {blocks.length > 0 && (
                <div className="mt-8">
                  <div className="prose max-w-none dark:prose-invert">
                    {blocks.map((block) => (
                      <div key={block.id}>{renderBlock(block)}</div>
                    ))}
                  </div>
                </div>
              )}

              {!loading && (
                <button
                  onClick={clearCache}
                  className="mt-8 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  캐시 지우기
                </button>
              )}
            </div>

            {/* 목차 네비게이션 */}
            {tableOfContents.length > 0 && (
              <div className="w-full md:w-1/4 md:ml-6 mt-6 md:mt-0">
                <div className="bg-white dark:bg-black shadow-md rounded p-4 sticky top-[100px]">
                  <h3 className="text-lg font-bold mb-4 border-b pb-2 dark:border-gray-700">
                    목차
                  </h3>
                  <nav className="toc-nav">
                    <ul className="space-y-2">
                      {tableOfContents.map((heading) => (
                        <li
                          key={heading.id}
                          className={`${
                            heading.level === 1
                              ? "ml-0"
                              : heading.level === 2
                              ? "ml-3"
                              : "ml-6"
                          } ${
                            activeHeading === heading.id
                              ? "text-blue-500 dark:text-blue-400 font-medium"
                              : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                          }`}
                        >
                          <button
                            onClick={() => scrollToHeading(heading.id)}
                            className="text-left w-full truncate"
                          >
                            {heading.text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotionPage;
