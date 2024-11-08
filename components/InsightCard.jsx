"use client";
import { motion } from "framer-motion";
import { fadeIn, textGradientVariant } from "../utils/motion";
import { ArrowRightIcon } from "./icons";
import styles from "../styles";
import React from "react";

const InsightCard = ({ imgUrl, title, subtitle }) => {
  return (
    // <motion.div
    //   // initial={{ opacity: 0, y: -20 }}
    //   // animate={{ opacity: 1, y: 0 }}
    //   // transition={{ duration: 0.5 }}
    //   // whileInView="show"
    //   variants={fadeIn("up", "spring", index * 0.7, 1)}
    //   className="flex md:flex-row flex-col gap-4 cursor-pointer"
    // >
    <div className="flex md:flex-row flex-col gap-4 cursor-pointer">
      <img
        src={imgUrl}
        alt="planet-01"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="mt-[26px] font-normal text-[42px] leading-[46px]">
            {title}
          </h4>
          <p className="mt-[16px] font-normal text-[20px] text-gray-400 dark:text-gray-400 leading-[32px]">
            {subtitle}
          </p>
        </div>
        <div
          className={`${styles.insightCardBorder} `}
          variants={textGradientVariant}
          initial="initial"
          animate="animate"
        >
          <ArrowRightIcon className="w-[20%] h-[20%] text-gray-600 dark:text-gray-300" />
        </div>
      </div>
    </div>

    // </motion.div>
  );
};

export default InsightCard;
