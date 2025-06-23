"use client";

import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { ResumeFile, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";

const Resume = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
          <motion.div
            variants={planetVariants("left")}
            className={`flex-1 ${styles.flexCenter}`}
          >
            {/* <img
              src="/get-started.png"
              alt="get-started"
              className="w-[90%] h-[90%] object-contain"
            /> */}
            <img
              src="/profile_01.png"
              alt="get-started"
              className="w-[90%] h-[90%] object-contain"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={`flex-1 flex flex-col justify-start `}
          >
            <TypingText title="Personal Introduction" textStyles="text-left" />
            <TitleText title="이력서 & 자기소개서" textStyles="!text-left" />
            <div className="mt-[31px] flex flex-col max-w-[370px] justify-start flex-wrap gap-[26px]">
              {startingFeatures.map((feature, index) => (
                <ResumeFile
                  key={feature.id}
                  number={index + 1}
                  text={feature.title}
                  link={feature.link}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
