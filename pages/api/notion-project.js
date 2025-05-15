import { Client } from "@notionhq/client";

// Notion API 클라이언트 초기화
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    // 요청에서 파라미터 추출
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "프로젝트 이름(name)이 필요합니다",
      });
    }

    // 데이터베이스에서 특정 이름의 프로젝트 찾기
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: "Name", // Notion의 제목 속성 이름
        title: {
          equals: name, // 정확히 일치하는 이름 찾기
        },
      },
    });

    // 결과가 없는 경우
    if (response.results.length === 0) {
      return res.status(404).json({
        success: false,
        message: `"${name}" 프로젝트를 찾을 수 없습니다`,
      });
    }

    // 첫 번째 결과를 가져옴
    const page = response.results[0];
    const properties = page.properties;
    const projectData = {};

    // 각 속성 타입에 따라 값 추출
    for (const key in properties) {
      const prop = properties[key];

      switch (prop.type) {
        case "title":
          projectData[key] = prop.title[0]?.plain_text || "";
          break;
        case "rich_text":
          projectData[key] = prop.rich_text[0]?.plain_text || "";
          break;
        case "url":
          projectData[key] = prop.url || "";
          break;
        case "files":
          if (prop.files.length > 0) {
            projectData[key] = prop.files.map((file) => ({
              name: file.name,
              url: file.file?.url || file.external?.url || "",
            }));
          } else {
            projectData[key] = [];
          }
          break;
        case "multi_select":
          projectData[key] = prop.multi_select.map((item) => item.name);
          break;
        default:
          projectData[key] = `[${prop.type} 형식]`;
      }
    }

    return res.status(200).json({
      success: true,
      project: projectData,
      // 원본 데이터도 포함
      rawData: page,
    });
  } catch (error) {
    console.error("Notion API Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching project from Notion",
      error: error.message,
    });
  }
}
