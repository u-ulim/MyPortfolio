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
          <h4 className="font-bold md:text-[64px] text-[44px]">
            준비 되었습니다! 🌻
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6  bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] leading-[20px]">
              함께하기
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-[#555555] opacity-15" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <motion.h2
              variants={textGradientVariant}
              initial="initial"
              animate="animate"
              className={`${styles.textHeading}`}
            >
              KIM DO KYUNG
            </motion.h2>

            <p className="font-normal text-[16px] leading-[20px] ">
              010-9248-9214
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
