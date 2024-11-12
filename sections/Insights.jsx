"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles";
import { TypingText, TitleText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { insights } from "../constants";
import InsightCard from "../components/InsightCard";

const Insights = () => {
  const [filter, setFilter] = useState("");
  const [filteredInsights, setFilteredInsights] = useState([]);

  useEffect(() => {
    const filtered = insights.filter((insight) =>
      filter ? insight.category === filter : true
    );
    setFilteredInsights(filtered);
  }, [filter, insights]);

  return (
    <section className={`${styles.paddings} mt-[200px] relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Toy Project Introduction" textStyles="text-center" />
        <TitleText title={"토이 프로젝트"} textStyles="" />
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
          <div className="flex justify-center items-center gap-4 mt-[60px] md:flex-row flex-col">
            <input
              type="text"
              placeholder="검색..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mb-4 p-2 border rounded text-gray-800 dark:text-gray-200 w-5/6 md:w-[180px]"
            />
            <div className="flex gap-4 mb-4">
              {["All", "React", "TS", "JS", "Next", "Node"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category === "All" ? "" : category)}
                  className="p-2 border border-gray-400 dark:border-gray-200 rounded text-sm sm:text-base"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-[50px] flex flex-col gap-[30px] ">
          <AnimatePresence>
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={index}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("up", "spring", index * 0.3, 0.5)}
                initial="hidden"
              >
                <InsightCard key={index} {...insight} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
