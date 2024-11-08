// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// import styles from "../styles";
// import { ExploreCard, TypingText, TitleText } from "../components";
// import { fadeIn, staggerContainer } from "../utils/motion";
// import { exploreWorlds } from "../constants";
// import { insights } from "../constants";
// import InsightCard from "../components/InsightCard";
// import React from "react";

// const Insights = () => {
//   return (
//     <section className={`${styles.paddings} mt-[200px] relative z-10`}>
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.25 }}
//         className={`${styles.innerWidth} mx-auto flex flex-col`}
//       >
//         <TypingText title="Toy Project Introduction" textStyles="text-center" />
//         <TitleText title={"개인 토이 프로젝트"} textStyles="" />
//         <div className="mt-[50px] flex flex-col gap-[30px] ">
//           {insights.map((insights, index) => (
//             <InsightCard key={`insight-${index}`} {...insights} index={index} />
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Insights;

// ... 기존 코드 ...

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles";
import { ExploreCard, TypingText, TitleText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";
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
        <TitleText title={"개인 토이 프로젝트"} textStyles="" />
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
          <div className="flex justify-center items-center gap-4 mt-[60px]">
            <input
              type="text"
              placeholder="검색..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mb-4 p-2 border rounded text-gray-800 dark:text-gray-200"
            />
            <div className="flex gap-4 mb-4">
              {["All", "React", "TS", "JS", "Next", "Node"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category === "All" ? "" : category)}
                  className="p-2 border rounded"
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
                key={insight.id}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("up", "spring", index * 0.3, 0.5)}
                initial="hidden"
              >
                <InsightCard {...insight} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
