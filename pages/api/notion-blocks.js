import { Client } from "@notionhq/client";

// Notion API 클라이언트 초기화
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    // 요청에서 페이지 ID 추출
    const { pageId } = req.query;

    if (!pageId) {
      return res.status(400).json({
        success: false,
        message: "페이지 ID가 필요합니다",
      });
    }

    // 페이지 블록 내용 가져오기
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
    });

    // 블록 내용 처리 및 반환
    const processedBlocks = await processBlocks(blocks.results);

    return res.status(200).json({
      success: true,
      blocks: processedBlocks,
    });
  } catch (error) {
    console.error("Notion API Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching blocks from Notion",
      error: error.message,
    });
  }
}

// 블록 내용 처리 함수
async function processBlocks(blocks) {
  const processedBlocks = [];

  for (const block of blocks) {
    let content = {};

    switch (block.type) {
      case "paragraph":
        content = {
          type: "paragraph",
          text: block.paragraph.rich_text
            .map((text) => text.plain_text)
            .join(""),
        };
        break;
      case "heading_1":
        content = {
          type: "heading_1",
          text: block.heading_1.rich_text
            .map((text) => text.plain_text)
            .join(""),
        };
        break;
      case "heading_2":
        content = {
          type: "heading_2",
          text: block.heading_2.rich_text
            .map((text) => text.plain_text)
            .join(""),
        };
        break;
      case "heading_3":
        content = {
          type: "heading_3",
          text: block.heading_3.rich_text
            .map((text) => text.plain_text)
            .join(""),
        };
        break;
      case "bulleted_list_item":
        content = {
          type: "bulleted_list_item",
          text: block.bulleted_list_item.rich_text
            .map((text) => text.plain_text)
            .join(""),
        };
        break;
      case "numbered_list_item":
        content = {
          type: "numbered_list_item",
          text: block.numbered_list_item.rich_text
            .map((text) => text.plain_text)
            .join(""),
        };
        break;
      case "to_do":
        content = {
          type: "to_do",
          text: block.to_do.rich_text.map((text) => text.plain_text).join(""),
          checked: block.to_do.checked,
        };
        break;
      case "toggle":
        content = {
          type: "toggle",
          text: block.toggle.rich_text.map((text) => text.plain_text).join(""),
          has_children: block.has_children,
        };
        break;
      case "image":
        content = {
          type: "image",
          url:
            block.image.type === "external"
              ? block.image.external.url
              : block.image.file.url,
          caption:
            block.image.caption?.map((text) => text.plain_text).join("") || "",
        };
        break;
      case "code":
        content = {
          type: "code",
          text: block.code.rich_text.map((text) => text.plain_text).join(""),
          language: block.code.language,
        };
        break;
      case "quote":
        content = {
          type: "quote",
          text: block.quote.rich_text.map((text) => text.plain_text).join(""),
        };
        break;
      case "divider":
        content = {
          type: "divider",
        };
        break;
      case "callout":
        content = {
          type: "callout",
          text: block.callout.rich_text.map((text) => text.plain_text).join(""),
          icon: block.callout.icon?.emoji || "💡",
        };
        break;
      default:
        content = {
          type: block.type,
          text: "지원되지 않는 블록 유형",
        };
    }

    // 현재 블록 추가
    const processedBlock = {
      id: block.id,
      ...content,
    };

    processedBlocks.push(processedBlock);

    // 하위 블록이 있는 경우 재귀적으로 처리
    if (block.has_children) {
      const childBlocks = await notion.blocks.children.list({
        block_id: block.id,
      });

      // 하위 블록 처리
      const processedChildBlocks = await processBlocks(childBlocks.results);

      // 토글 블록인 경우 하위 블록을 children 속성으로 저장
      if (block.type === "toggle") {
        processedBlock.children = processedChildBlocks;
      } else {
        // 토글이 아닌 경우 하위 블록을 배열에 추가
        processedBlocks.push(...processedChildBlocks);
      }
    }
  }

  return processedBlocks;
}
