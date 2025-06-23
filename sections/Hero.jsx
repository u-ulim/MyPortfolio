"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import {
  slideIn,
  staggerContainer,
  textVariant,
  textGradientVariant,
} from "../utils/motion";
import {
  GithubIcon,
  NotionIcon,
  KakaoIcon,
  MailIcon,
} from "../components/icons";

const Hero = () => (
  <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex items-center justify-center flex-col relative z-10 ">
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-row justify-center items-center mt-[120px]"
        >
          <motion.h1
            className={`${styles.heroHeading} text-light-text dark:text-dark-text `}
          >
            FRONTEN
          </motion.h1>
          <div className={styles.heroDText} />
        </motion.div>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <motion.h1
            className={`${styles.heroHeading} text-light-text dark:text-dark-text`}
          >
            PORTFOLI
            <motion.span
              className={`${styles.heroOText}`}
              variants={textGradientVariant}
              initial="initial"
              animate="animate"
            >
              O
            </motion.span>
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 1.5, 1)}
        className={`${styles.yPaddings} relative w-full md:-mt-[20px] -mt-[12px] sm:pl-16 pl-6`}
      >
        <div className={styles.heroGradientBox} />
        <img
          src="/cover.png"
          alt="hero-gradient"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
          <div className="absolute z-10 right-[16px] top-[30px]"></div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
