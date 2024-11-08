"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import { workExperience } from "../constants";
import Experience from "../components/Experience";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="absolute inset-0 z--10 feedback-gradient" />
        <div className="relative z-10">
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-gray-900 dark:text-gray-200">
            경력 및 교육 사항
          </h4>
          <ul className="mt-[20px] flex flex-col gap-4">
            {workExperience.map((experience, index) => (
              <Experience
                key={experience.id}
                {...experience}
                className=" font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-gray-700 dark:text-gray-300"
              />
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className=" relative flex-1 flex justify-center items-center"
      >
        {/* <img
          src="/experienceImg.png"
          alt="experience Image"
          className="w-full h-full object-cover rounded-[40px]"
        /> */}
        <img
          src="/experienceImg.png"
          alt="planet-09"
          className="w-full h-full object-cover rounded-[40px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
