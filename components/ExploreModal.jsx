import React from "react";

import { motion } from "framer-motion";
import styles from "../styles";
import ModalContent from "./ModalContent";

const ExploreModal = ({
  className,
  onClick,
  onClose,
  id,
  imgUrl,
  title,
  index,
  subTitle,
  date,
  teamType,
  link,
  pathPdfLink,
  logo,
  startDescription,
  studyDescription,
  subTitle01,
  subTitle01Img,
  subTitle01Description,
  subTitle02,
  subTitle02Img,
  subTitle02Description,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="w-[90%] sm:w-[70%] h-full border-white pt-[56px] pb-[56px]">
        <h1 className="text-[24px] sm:text-[32px] font-bold mb-[32px]">
          {subTitle}
        </h1>
        <ul className="mb-[58px]">
          <li className={`${styles.exploreModalList}`}>
            <div className={`${styles.exploreModalListTitle}`}>
              <i className="w-[24px] h-[24px] cursor-pointer block">
                <img
                  src="/modal_title-ico01.svg"
                  alt="title-icon"
                  className="w-full h-full object-cover"
                />
              </i>
              <span>주제</span>
            </div>
            <div className={`${styles.exploreModalListContent}`}>{title}</div>
          </li>
          <li className={`${styles.exploreModalList}`}>
            <div className={`${styles.exploreModalListTitle}`}>
              <i className="w-[24px] h-[24px] cursor-pointer block">
                <img
                  src="/modal_title-ico01.svg"
                  alt="title-icon"
                  className="w-full h-full object-cover"
                />
              </i>
              <span>프로젝트 유형</span>
            </div>
            <div className={`${styles.exploreModalListContent}`}>
              {teamType}
            </div>
          </li>

          <li className={`${styles.exploreModalList}`}>
            <div className={`${styles.exploreModalListTitle}`}>
              <i className="w-[24px] h-[24px] cursor-pointer block">
                <img
                  src="/modal_title-ico01.svg"
                  alt="title-icon"
                  className="w-full h-full object-cover"
                />
              </i>
              <span>기간</span>
            </div>
            <div className={`${styles.exploreModalListContent}`}>{date}</div>
          </li>
          <li className={`${styles.exploreModalList}`}>
            <div className={`${styles.exploreModalListTitle}`}>
              <i className="w-[24px] h-[24px] cursor-pointer block">
                <img
                  src="/modal_title-ico01.svg"
                  alt="title-icon"
                  className="w-full h-full object-cover"
                />
              </i>
              <span>링크</span>
            </div>
            <div className={`${styles.exploreModalListContent}`}>{link}</div>
          </li>
          <li className={`${styles.exploreModalList}`}>
            <div className={`${styles.exploreModalListTitle}`}>
              <i className="w-[24px] h-[24px] cursor-pointer block">
                <img
                  src="/modal_title-ico01.svg"
                  alt="title-icon"
                  className="w-full h-full object-cover"
                />
              </i>
              <span>Open With PDF</span>
            </div>
            <div className={`${styles.exploreModalListContent}`}>
              {pathPdfLink}
            </div>
          </li>
        </ul>
        <div className="pl-[4px] flex flex-col gap-12">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-[100%] h-[100%] max-h-[120px] object-contain"
            />
          </div>
          <ModalContent
            title={"Team Project Start"}
            description={startDescription}
          />
          <ModalContent title={"Study"} description={studyDescription} />

          <ModalContent
            title={"IA, WBS"}
            subTitle01={subTitle01}
            subTitle01Img={subTitle01Img}
            subTitle01Description={subTitle01Description}
          />
          <ModalContent
            subTitle02={subTitle02}
            subTitle02Img={subTitle02Img}
            subTitle02Description={subTitle02Description}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ExploreModal;
