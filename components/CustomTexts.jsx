"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { textVariant2, textContainer } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    className={`font-normal text-[14px] text-light-text dark:text-dark-text ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h
    variants={fadeIn("up", "tween", 0.2, 1)}
    className={`mt-[30px] font-extrabold sm:text-[48px] text-[20px] text-center relative z--200 ${textStyles}`}
  >
    {title}
  </motion.h>
);
