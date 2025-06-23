import React from "react";

import { motion } from "framer-motion";
import styles from "../styles";
import ModalContent from "./ModalContent";
import NotionPage from "../sections/NotionPage";
const Modal = ({ className, onClick, subTitle }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <NotionPage notionProjectName={subTitle} />
    </motion.div>
  );
};

export default Modal;
