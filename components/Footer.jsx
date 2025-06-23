"use client";

import styles from "../styles";
import { motion } from "framer-motion";
import { footerVariants, textGradientVariant } from "../utils/motion";

import React from "react";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px]">연락처 📩</h4>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-[#555555] opacity-15" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <motion.p
              variants={textGradientVariant}
              initial="initial"
              animate="animate"
              className={`${styles.textHeading}`}
            >
              010-9248-9214
            </motion.p>

            <p>KIM DO KYOUNG</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
