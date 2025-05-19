import React from "react";

import { motion } from "framer-motion";
import styles from "../styles";
import ModalContent from "./ModalContent";
import NotionTest from "../sections/NotionTest";
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
  iaWbs,
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
      <NotionTest
        notionProjectName={subTitle}
        id={id}
        title={title}
        date={date}
        teamType={teamType}
        link={link}
        pathPdfLink={pathPdfLink}
        logo={logo}
        iaWbs={iaWbs}
        startDescription={startDescription}
        studyDescription={studyDescription}
        subTitle01={subTitle01}
        subTitle01Img={subTitle01Img}
        subTitle01Description={subTitle01Description}
        subTitle02={subTitle02}
        subTitle02Img={subTitle02Img}
        subTitle02Description={subTitle02Description}
      />
    </motion.div>
  );
};

export default ExploreModal;
