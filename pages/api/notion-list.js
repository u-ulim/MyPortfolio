import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  try {
    console.log("API 핸들러 시작");
    console.log("환경 변수 확인:");
    console.log("NOTION_API_KEY 설정됨:", !!process.env.NOTION_API_KEY);
    console.log("NOTION_DATABASE_ID 설정됨:", !!process.env.NOTION_DATABASE_ID);
    console.log("NOTION_DATABASE_ID 값:", process.env.NOTION_DATABASE_ID);

    // Notion API 클라이언트 초기화
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });

    console.log("Notion 클라이언트 초기화 완료");

    // 데이터베이스 기본 정보 먼저 가져오기 시도
    try {
      console.log("데이터베이스 정보 가져오기 시도...");
      const dbInfo = await notion.databases.retrieve({
        database_id: process.env.NOTION_DATABASE_ID,
      });
      console.log("데이터베이스 정보 가져오기 성공!");
      console.log(
        "데이터베이스 제목:",
        dbInfo.title[0]?.plain_text || "제목 없음"
      );
    } catch (dbError) {
      console.error("데이터베이스 정보 가져오기 실패:", dbError.message);
      return res.status(500).json({
        success: false,
        message: "데이터베이스 정보 가져오기 실패",
        error: dbError.message,
        stack: dbError.stack,
      });
    }

    // 데이터베이스 쿼리
    console.log("데이터베이스 쿼리 시도...");
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    console.log("데이터베이스 쿼리 성공!");
    console.log("결과 수:", response.results.length);

    // 결과에서 id와 제목만 추출
    const projects = response.results.map((project) => {
      return {
        id: project.properties.id?.rich_text[0]?.plain_text || "없음",
        title: project.properties.title?.title[0]?.plain_text || "제목 없음",
      };
    });

    console.log("처리된 프로젝트:", projects);

    return res.status(200).json({
      success: true,
      count: projects.length,
      projects: projects,
    });
  } catch (error) {
    console.error("일반 API 오류:", error);
    console.error("오류 스택:", error.stack);
    return res.status(500).json({
      success: false,
      message: "데이터베이스 조회 실패",
      error: error.message,
      stack: error.stack,
    });
  }
}
