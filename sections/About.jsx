"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";

import styles from "../styles";
import {
  slideIn,
  fadeIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";
import { ArrowDownIcon } from "../components/icons";

const About = () => (
  <section className={`${styles.paddings} mt-[40px] relative z-10 `}>
    <div className="gradient-02 z-0 absolute top-[20%] right-[20%] opacity-[0.5]  " />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col relative z-10`}
    >
      <TypingText title="Hello!" textStyles="text-center relative z-20" />

      <TitleText title={"Frontend Developer 김도경입니다 🧐2"} />

      <motion.div
        variants={fadeIn("up", "tween", 1, 1)} // motion 적용
      >
        <ArrowDownIcon
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[140px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
