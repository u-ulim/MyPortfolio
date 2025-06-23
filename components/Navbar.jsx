"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { textGradientVariant } from "../utils/motion";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const sidebarVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    show: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Project", href: "#project" },
    { name: "Toy Project", href: "#toy-project" },
    { name: "Introduction", href: "#introduction" },
  ];

  // 부드러운 스크롤 함수
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeSidebar(); // 스크롤 후 사이드바 닫기
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-4 fixed top-0 left-0 right-0 z-[9999] bg-primary-black/40 backdrop-blur-sm`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <motion.h2
            variants={textGradientVariant}
            initial="initial"
            animate="animate"
            className={`${styles.textHeading}`}
          >
            KIM DO KYOUNG
          </motion.h2>
          <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="relative z-10">
              <img
                src="/search.svg"
                alt="menu"
                className="w-[24px] h-[24px] object-contain cursor-pointer 
                  invert-0 dark:invert transition-transform hover:scale-110"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="fixed inset-0 bg-black/50 z-[9998]"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate={isSidebarOpen ? "show" : "hidden"}
        className="fixed top-0 right-0 h-full w-60 bg-primary-black/90 backdrop-blur-md z-[9999] shadow-xl"
      >
        <div className="p-8">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={closeSidebar}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="space-y-6">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block text-white text-xl font-medium hover:text-secondary-white transition-colors cursor-pointer text-left w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isSidebarOpen ? 1 : 0,
                  x: isSidebarOpen ? 0 : 50,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Gradient decoration */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary-white/10 to-transparent" />
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
