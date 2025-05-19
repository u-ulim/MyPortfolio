"use client";
import React from "react";

const ModalContent = ({
  title,
  subTitle01,
  subTitle01Img,
  subTitle02,
  subTitle02Img,
  description,
  subTitle01Description,
  subTitle02Description,
}) => {
  return (
    <div>
      {title && (
        <h2 className="text-[32px] font-semibold mb-[12px]">{title}</h2>
      )}
      {subTitle01 && (
        <>
          <h3 className="text-[18px] sm:text-[18px] font-semibold mb-[12px]">
            {subTitle01}
          </h3>
          {subTitle01Img && (
            <img
              src={subTitle01Img}
              alt={title}
              className="w-full object-contain mb-[12px]"
            />
          )}

          {subTitle01Description && (
            <p className="font-normal text-[16px] text-gray-400">
              {subTitle01Description}
            </p>
          )}
        </>
      )}
      {description && (
        <p className="font-normal text-[16px] text-gray-400">{description}</p>
      )}
      {subTitle02 && (
        <>
          <h3 className="text-[18px] sm:text-[18px] font-semibold mb-[12px]">
            {subTitle02}
          </h3>
          {subTitle02Img && (
            <img
              src={subTitle02Img}
              alt={title}
              className="w-full object-contain mb-[12px]"
            />
          )}

          {subTitle02Description && (
            <p className="font-normal text-[16px] text-gray-400">
              {subTitle02Description}
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
