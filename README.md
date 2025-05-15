# MyPortfolio

Next.js 기반의 개인 포트폴리오 웹사이트

## 설치하기

```bash
# Node.js 및 npm 설치 필요
npm install
```

## 개발 서버 실행하기

```bash
npm run dev
```

## Notion API 연동 설정하기

1. Notion API 키 발급받기

   - [Notion Developers](https://developers.notion.com/)에서 계정 생성 및 API 키 발급
   - 통합(Integration) 생성하기

2. 프로젝트 데이터베이스 만들기

   - Notion에서 새 데이터베이스 생성
   - 다음 속성들을 포함해야 합니다:
     - id (텍스트): 프로젝트 ID (예: world-1)
     - title (제목): 프로젝트 제목
     - subTitle01 (텍스트): 첫 번째 소제목
     - subTitle01Img (URL/파일): 첫 번째 소제목 이미지
     - subTitle01Description (텍스트): 첫 번째 소제목 설명
     - subTitle02 (텍스트): 두 번째 소제목
     - subTitle02Img (URL/파일): 두 번째 소제목 이미지
     - subTitle02Description (텍스트): 두 번째 소제목 설명
     - description (텍스트): 일반 설명

3. 프로젝트 루트에 `.env.local` 파일 생성하기:

   ```
   # Notion API 키
   NOTION_API_KEY=your_notion_api_key_here

   # Notion 데이터베이스 ID
   NOTION_DATABASE_ID=your_notion_database_id_here
   ```

4. 통합(Integration)을 데이터베이스에 연결하기
   - 데이터베이스에서 '공유' 버튼 클릭
   - 연결(Connect) 탭에서 생성한 통합(Integration) 선택

## 모달 콘텐츠 Notion으로 관리하기

각 프로젝트의 상세 정보는 이제 Notion 데이터베이스에서 관리할 수 있습니다. 프로젝트 ID(예: world-1)를 기준으로 데이터를 불러옵니다.

필요에 따라 Notion 속성을 추가하거나 변경할 수 있으며, `/pages/api/notion.js` 파일에서 API 요청을 수정하여 추가 데이터를 가져올 수 있습니다.
