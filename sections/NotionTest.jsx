"use client";
import { useState, useEffect } from "react";
import styles from "../styles";

const NotionTest = ({
  notionProjectName,
  id,
  title,
  date,
  teamType,
  link,
  pathPdfLink,
  logo,
  iaWbs,
  startDescription,
  studyDescription,
  subTitle01,
  subTitle01Img,
  subTitle01Description,
  subTitle02,
  subTitle02Img,
  subTitle02Description,
}) => {
  const [project, setProject] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openToggles, setOpenToggles] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // 프로젝트 정보 가져오기
        const projectResponse = await fetch(
          `/api/notion-project?name=${encodeURIComponent(notionProjectName)}`
        );

        if (!projectResponse.ok) {
          throw new Error(`프로젝트 API 요청 실패: ${projectResponse.status}`);
        }

        const projectData = await projectResponse.json();
        console.log("프로젝트 데이터:", projectData);
        setProject(projectData.project);

        // 페이지 ID가 있으면 블록 내용 가져오기
        if (projectData.rawData && projectData.rawData.id) {
          const pageId = projectData.rawData.id;
          const blocksResponse = await fetch(
            `/api/notion-blocks?pageId=${pageId}`
          );

          if (blocksResponse.ok) {
            const blocksData = await blocksResponse.json();
            console.log("블록 데이터:", blocksData);
            setBlocks(blocksData.blocks || []);
          }
        }
      } catch (err) {
        console.error("데이터 가져오기 실패:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [notionProjectName]);

  // 토글 상태 변경 함수
  const handleToggle = (toggleId) => {
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
        return <h1 className="text-2xl font-bold mb-4">{block.text}</h1>;
      case "heading_2":
        return <h2 className="text-xl font-bold mb-3">{block.text}</h2>;
      case "heading_3":
        return <h3 className="text-lg font-bold mb-2">{block.text}</h3>;
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
            {isOpen && block.children && (
              <div className="pl-6 mt-1 border-l-2 border-gray-200 dark:border-gray-700">
                {block.children.map((childBlock) => (
                  <div key={childBlock.id}>{renderBlock(childBlock)}</div>
                ))}
              </div>
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

  console.log("project", project);

  return (
    <div className="w-[90%] sm:w-[70%] h-full border-white pt-[56px] pb-[56px]">
      <div className="container mx-auto">
        {loading && <p>로딩 중...</p>}

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 mb-4">
            <p>오류: {error}</p>
          </div>
        )}

        {project && !loading && (
          <div className="bg-white dark:bg-black shadow-md rounded p-6 text-black dark:text-white">
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
                  <span>주제</span>
                </div>
                <div className={`${styles.exploreModalListContent}`}>
                  {title}
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
                  <span>프로젝트 유형</span>
                </div>
                <div className={`${styles.exploreModalListContent}`}>
                  {teamType}
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
                  <span>기간</span>
                </div>
                <div className={`${styles.exploreModalListContent}`}>
                  {date}
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
                  <span>링크</span>
                </div>
                <div className={`${styles.exploreModalListContent}`}>
                  {link}
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
                  <span>Open With PDF</span>
                </div>
                <div className={`${styles.exploreModalListContent}`}>
                  {pathPdfLink}
                </div>
              </li>
            </ul>
            {/* <h2 className="text-xl font-bold mb-4">{project.Name}</h2> */}

            {/* 프로젝트 속성 표시 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {Object.entries(project).map(([key, value]) => (
                <div key={key} className="border-b dark:border-gray-700 pb-2">
                  <p className="font-semibold">{key}</p>
                  {Array.isArray(value) ? (
                    value.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {value.map((item, index) => (
                          <li key={index}>
                            {typeof item === "object" ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 dark:text-blue-300 underline"
                              >
                                {item.name}
                              </a>
                            ) : (
                              item
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>없음</p>
                    )
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* 페이지 블록 내용 표시 */}
            {blocks.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">페이지 내용</h3>
                <div className="prose max-w-none dark:prose-invert">
                  {blocks.map((block) => (
                    <div key={block.id}>{renderBlock(block)}</div>
                  ))}
                </div>
              </div>
            )}

            {/* 원본 JSON 데이터 */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">원본 JSON</h3>
              <pre className="bg-gray-800 dark:bg-gray-900 p-4 rounded overflow-auto max-h-96 text-xs text-gray-300">
                {JSON.stringify(project, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* /////////////////////////////*/}
      {/* <div className="pl-[4px] flex flex-col gap-12"> */}
      {/* <div>
        <img
          src={logo}
          alt="logo"
          className="w-[100%] h-[100%] max-h-[120px] object-contain"
        />
      </div> */}
      {/* <ModalContent
        id={id}
        title={"Project Start"}
        description={startDescription}
      />

      <ModalContent
        id={id}
        title={"Study"}
        description={studyDescription}
      />

      {iaWbs && (
        <>
          <ModalContent
            id={id}
            title={"IA, WBS"}
            subTitle01={subTitle01}
            subTitle01Img={subTitle01Img}
            subTitle01Description={subTitle01Description}
          />
          <ModalContent
            id={id}
            subTitle02={subTitle02}
            subTitle02Img={subTitle02Img}
            subTitle02Description={subTitle02Description}
          />
        </>
      )} */}
      {/* </div> */}
    </div>
  );
};

export default NotionTest;
