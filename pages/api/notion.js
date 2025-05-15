import { Client } from "@notionhq/client";

// Notion API 클라이언트 초기화
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    // 요청 메소드 확인
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    // 요청에서 ID 추출
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "Project ID is required" });
    }

    // Notion 데이터베이스 ID (환경 변수로 설정해야 함)
    const databaseId = process.env.NOTION_DATABASE_ID;

    // 데이터베이스에서 특정 ID에 해당하는 항목 필터링
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "id", // Notion 데이터베이스의 프로퍼티 이름
        rich_text: {
          equals: id,
        },
      },
    });

    // 결과가 없는 경우
    if (response.results.length === 0) {
      return res.status(404).json({ message: "Project not found" });
    }

    // 첫 번째 결과를 가져옴
    const project = response.results[0];

    // 필요한 프로퍼티 추출
    const projectData = {
      id: project.properties.id?.rich_text[0]?.plain_text || "",
      title: project.properties.title?.title[0]?.plain_text || "",
      subTitle01: project.properties.subTitle01?.rich_text[0]?.plain_text || "",
      subTitle01Img: project.properties.subTitle01Img?.url || "",
      subTitle01Description:
        project.properties.subTitle01Description?.rich_text[0]?.plain_text ||
        "",
      subTitle02: project.properties.subTitle02?.rich_text[0]?.plain_text || "",
      subTitle02Img: project.properties.subTitle02Img?.url || "",
      subTitle02Description:
        project.properties.subTitle02Description?.rich_text[0]?.plain_text ||
        "",
      description:
        project.properties.description?.rich_text[0]?.plain_text || "",
    };

    return res.status(200).json(projectData);
  } catch (error) {
    console.error("Notion API Error:", error);
    return res.status(500).json({
      message: "Error fetching data from Notion",
      error: error.message,
    });
  }
}
