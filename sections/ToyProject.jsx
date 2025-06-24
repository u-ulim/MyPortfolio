"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles";
import { TypingText, TitleText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { toyProjects } from "../constants";
import ToyProjectCard from "../components/ToyProjectCard";

const ToyProject = () => {
  const [filter, setFilter] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const filtered = toyProjects.filter((project) =>
      filter ? project.category === filter : true
    );
    setFilteredProjects(filtered);
    setVisibleCount(3); // 필터 변경 시 다시 3개로 리셋
  }, [filter, toyProjects]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

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
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-center text-gray-600 dark:text-gray-400 mt-4"
        >
          총 {filteredProjects.length}개의 프로젝트
        </motion.div>
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
              {["All", "JS", "TS", "React", "Next", "Node"].map((category) => {
                const isActive =
                  (category === "All" && filter === "") || filter === category;
                return (
                  <button
                    key={category}
                    onClick={() =>
                      setFilter(category === "All" ? "" : category)
                    }
                    className={`p-2 border rounded text-sm sm:text-base transition-colors ${
                      isActive
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "border-gray-400 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="mt-[50px] flex flex-col gap-[30px] ">
          <AnimatePresence>
            {visibleProjects.map((projects, index) => (
              <motion.div
                key={index}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("up", "spring", index * 0.3, 0.5)}
                initial="hidden"
              >
                <ToyProjectCard key={index} {...projects} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div
            className="flex justify-center mt-8"
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
            >
              더보기
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ToyProject;
