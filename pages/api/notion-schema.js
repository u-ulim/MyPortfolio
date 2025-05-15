import { Client } from "@notionhq/client";

// Notion API 클라이언트 초기화
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    // 데이터베이스 정보 가져오기
    const database = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    // 전체 데이터베이스 정보 반환
    const properties = database.properties;

    // 속성 정보를 더 읽기 쉬운 형태로 변환
    const propertiesInfo = {};

    for (const key in properties) {
      propertiesInfo[key] = {
        name: properties[key].name,
        type: properties[key].type,
        id: properties[key].id,
      };
    }

    return res.status(200).json({
      success: true,
      databaseTitle: database.title[0]?.plain_text || "제목 없음",
      properties: propertiesInfo,
      // 전체 속성 정보도 함께 반환
      fullProperties: properties,
    });
  } catch (error) {
    console.error("API 오류:", error);
    return res.status(500).json({
      success: false,
      message: "데이터베이스 정보 조회 실패",
      error: error.message,
    });
  }
}
