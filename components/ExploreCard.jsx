"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import ExploreModal from "./ExploreModal";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  subTitle,
  date,
  teamType,
  link,
  pathPdfLink,
  techStack,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false); // 모달 상태 관리
  const [tooltipIndex, setTooltipIndex] = useState(null); // 툴팁 상태 관리

  const handleModalClick = () => {
    setIsOpenModal(true); // 모달 열기
  };

  // useEffect(() => {
  //   // 모달이 열릴 때 스크롤 비활성화
  //   if (isOpenModal) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 활성화
  //   }

  //   // 컴포넌트 언마운트 시 원래 상태로 복원
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpenModal]);

  useEffect(() => {
    // 모달이 열릴 때 스크롤 비활성화
    if (isOpenModal) {
      document.body.style.overflow = "hidden"; // 스크롤 비활성화
      document.body.style.marginRight = "15px";
    } else {
      document.body.style.overflow = ""; // 기본 상태로 복원
      document.body.style.marginRight = "0px";
    }

    // 컴포넌트 언마운트 시 원래 상태로 복원
    return () => {
      document.body.style.overflow = ""; // 기본 상태로 복원
    };
  }, [isOpenModal]);

  return (
    <>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`relative ${
          active === id
            ? "lg:flex-[3.5] flex-[10]"
            : "lg:flex-[0.5] flex-[2] !cursor-pointer"
        } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-default `}
        onClick={() => handleClick(id)}
      >
        <img
          src={imgUrl}
          alt="planet-04"
          className="absolute w-full h-full object-cover rounded-[24px]"
        />
        {active !== id ? (
          <>
            <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-10 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] ">
              {title}
            </h3>
            <div className="absolute z-0 bottom-0  w-[100%] !h-[100%]  bg-[rgba(0,0,0,0.9)] rounded-[24px]"></div>
          </>
        ) : (
          <div className="absolute bottom-0 p-4  flex justify-end w-full h-[auto] flex-col bg-[rgba(0,0,0,0.7)] rounded-b-[24px]">
            <div className="flex items-center flex-wrap  gap-[6px] sm:gap-[12px] mb-[16px] ">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`${styles.flexCenter} sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] rounded-[2px] glassmorphism relative`}
                  onMouseEnter={() => setTooltipIndex(index)} // 마우스 오버 시 툴팁 표시
                  onMouseLeave={() => setTooltipIndex(null)} // 마우스 나가면 툴팁 숨김
                >
                  <img
                    src={`/logos_${tech}.svg`}
                    alt={tech}
                    className="w-1/2 h-1/2 object-contain z-100"
                  />
                  {tooltipIndex === index && ( // 현재 인덱스와 일치할 때만 툴팁 표시
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-700 text-white text-xs rounded py-1 px-2">
                      {tech} {/* 툴팁 내용 */}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div
              onClick={handleModalClick}
              className="flex items-center justify-between gap-[12px] sm:justify-start  mb-4"
            >
              <p className="font-normal text-[16px]  text-gray-400 uppercase cursor-pointer">
                👀 기획부터 디자인, 개발까지 과정 엿보기
              </p>
              <i className="w-[24px] h-[24px] cursor-pointer block">
                <img
                  src="/modal.svg"
                  alt="modal"
                  className="w-full h-full object-cover"
                />
              </i>
            </div>
            <div className="flex items-center justify-between gap-[12px] sm:justify-start mb-[12px]">
              <p className="font-normal text-[16px] leading-[20.16px] text-gray-400 uppercase cursor-pointer">
                ✈️ 사이트 구경하기
              </p>
              <i className="w-[20px] h-[20px] cursor-pointer block">
                <img
                  src="/link.svg"
                  alt="link"
                  className="w-full h-full object-cover"
                />
              </i>
            </div>

            <h2 className=" font-semibold sm:text-[32px] text-[24px] text-white">
              {title}
            </h2>
          </div>
        )}
      </motion.div>
      {isOpenModal && (
        <div
          onClick={() => setIsOpenModal(false)} // 배경 클릭 시 모달 닫기
          className="fixed top-0 left-0 w-full h-full z-20 bg-black/70  dark:bg-gray-800/80 flex items-center justify-center cursor-pointer border-gray-100 overflow-y-scroll"
        >
          <ExploreModal
            className="bg-white/100 dark:bg-black sm:w-[70%] sm:h-[80%] w-[90%] h-[90%] z-50 rounded-[12px] cursor-default flex items-center justify-center "
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 방지
            onClose={() => setIsOpenModal(false)} // onClose에서 모달 닫기
            id={id}
            imgUrl={imgUrl}
            title={title}
            index={index}
            subTitle={subTitle}
            date={date}
            teamType={teamType}
            link={link}
            pathPdfLink={pathPdfLink}
          />
        </div>
      )}
      {/* 모달 컴포넌트 */}
    </>
  );
};

export default ExploreCard;
