"use client";
import { useState, useEffect } from "react";

const NotionTest = () => {
  const [project, setProject] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projectName, setProjectName] = useState("Temu");
  const [openToggles, setOpenToggles] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // 프로젝트 정보 가져오기
        const projectResponse = await fetch(
          `/api/notion-project?name=${encodeURIComponent(projectName)}`
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
  }, [projectName]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProjectName = formData.get("projectName");
    setProjectName(newProjectName);
  };

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
              <div className="pl-6 mt-1 border-l-2 border-gray-200">
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
              <figcaption className="text-sm text-gray-500 mt-1">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      case "code":
        return (
          <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
            <code>{block.text}</code>
          </pre>
        );
      case "quote":
        return (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
            {block.text}
          </blockquote>
        );
      case "divider":
        return <hr className="my-4" />;
      case "callout":
        return (
          <div className="bg-gray-100 p-4 rounded-md flex items-start mb-4">
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notion 프로젝트 테스트</h1>

      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            name="projectName"
            defaultValue={projectName}
            placeholder="프로젝트 이름 입력"
            className="border p-2 rounded flex-grow"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            검색
          </button>
        </div>
      </form>

      {loading && <p>로딩 중...</p>}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p>오류: {error}</p>
        </div>
      )}

      {project && !loading && (
        <div className="bg-white shadow-md rounded p-6 text-black">
          <h2 className="text-xl font-bold mb-4">{project.Name}</h2>

          {/* 프로젝트 속성 표시 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {Object.entries(project).map(([key, value]) => (
              <div key={key} className="border-b pb-2">
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
                              className="text-blue-400 underline"
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
              <div className="prose max-w-none prose-invert">
                {blocks.map((block) => (
                  <div key={block.id}>{renderBlock(block)}</div>
                ))}
              </div>
            </div>
          )}

          {/* 원본 JSON 데이터 */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">원본 JSON</h3>
            <pre className="bg-gray-800 p-4 rounded overflow-auto max-h-96 text-xs text-gray-300">
              {JSON.stringify(project, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotionTest;
