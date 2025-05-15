"use client";
import React, { useState, useEffect } from "react";

const ModalContent = ({
  id,
  title,
  subTitle01,
  subTitle01Img,
  subTitle02,
  subTitle02Img,
  description,
  subTitle01Description,
  subTitle02Description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notionData, setNotionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotionData = async () => {
      if (!id) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/notion?id=${id}`);

        if (!response.ok) {
          throw new Error(`API 요청 실패: ${response.status}`);
        }

        const data = await response.json();
        setNotionData(data);
      } catch (err) {
        console.error("Notion 데이터 가져오기 실패:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotionData();
  }, [id]);

  // 로컬 props와 Notion 데이터 병합
  const contentData = notionData || {
    title,
    subTitle01,
    subTitle01Img,
    subTitle01Description,
    subTitle02,
    subTitle02Img,
    subTitle02Description,
    description,
  };

  if (isLoading) {
    return <div className="text-center py-8">데이터를 불러오는 중...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
        <p className="mt-2 text-sm">로컬 데이터를 대신 표시합니다.</p>
      </div>
    );
  }

  return (
    <div>
      {contentData.title && (
        <h2 className="text-[32px] font-semibold mb-[12px]">
          {contentData.title}
        </h2>
      )}
      {contentData.subTitle01 && (
        <>
          <h3 className="text-[18px] sm:text-[18px] font-semibold mb-[12px]">
            {contentData.subTitle01}
          </h3>
          {contentData.subTitle01Img && (
            <img
              src={contentData.subTitle01Img}
              alt={contentData.title}
              className="w-full object-contain mb-[12px]"
            />
          )}

          {contentData.subTitle01Description && (
            <p className="font-normal text-[16px] text-gray-400">
              {contentData.subTitle01Description}
            </p>
          )}
        </>
      )}
      {contentData.description && (
        <p className="font-normal text-[16px] text-gray-400">
          {contentData.description}
        </p>
      )}
      {contentData.subTitle02 && (
        <>
          <h3 className="text-[18px] sm:text-[18px] font-semibold mb-[12px]">
            {contentData.subTitle02}
          </h3>
          {contentData.subTitle02Img && (
            <img
              src={contentData.subTitle02Img}
              alt={contentData.title}
              className="w-full object-contain mb-[12px]"
            />
          )}

          {contentData.subTitle02Description && (
            <p className="font-normal text-[16px] text-gray-400">
              {contentData.subTitle02Description}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ModalContent;

// <button
// onClick={() => setIsOpen(!isOpen)}
// className="flex items-center gap-2 w-full py-2 px-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
// >
// <svg
//   className={`w-4 h-4 transition-transform duration-200 ${
//     isOpen ? "rotate-90" : ""
//   }`}
//   viewBox="0 0 24 24"
//   fill="none"
//   stroke="currentColor"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth={2}
//     d="M9 5l7 7-7 7"
//   />
// </svg>
// <span className="text-gray-700 dark:text-gray-200">
//   {isOpen ? "접기" : "더보기"}
// </span>
// </button>
// <div
// className={`pl-6 overflow-hidden transition-all duration-200 ease-out ${
//   isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
// }`}
// >
// <div className="py-2 text-gray-600 dark:text-gray-400">hi</div>
// </div>
