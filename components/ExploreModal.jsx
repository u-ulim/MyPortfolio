import React from "react";

import { motion } from "framer-motion";
import styles from "../styles";

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
      <div className="w-[90%] sm:w-[70%] h-full border-white pt-[56px]">
        <h1 className="text-[24px] sm:text-[32px] font-bold mb-[32px]">
          {subTitle}
        </h1>
        <ul>
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

        <div onClick={(e) => e.stopPropagation()}>{/* 추가적인 내용 */}</div>
      </div>
    </motion.div>
  );
};

export default ExploreModal;
