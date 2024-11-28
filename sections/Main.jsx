"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import styles from "../styles";
import { MainCard, TypingText, TitleText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";

const Main = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings} mt-[200px] relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Project Introduction" textStyles="text-center" />
        <TitleText title={"팀 프로젝트 & 개인 프로젝트"} textStyles="" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[100vh] gap-10 sm:gap-5">
          {exploreWorlds.map((world, index) => (
            <MainCard
              key={index}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Main;
