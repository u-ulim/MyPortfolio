"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import {
  slideIn,
  fadeIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} mt-[40px] relative z-10`}>
    <div className="gradient-02 z-0 absolute top-[20%] right-[20%] opacity-[0.5]" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col relative z-10`}
    >
      <TypingText title="어서오세요" textStyles="text-center relative z-20" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center relative z-20"
      >
        안녕하세요 난 김도경
      </motion.p>
    </motion.div>
  </section>
);

export default About;
