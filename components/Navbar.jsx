"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { textGradientVariant } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <motion.h2
        variants={textGradientVariant}
        initial="initial"
        animate="animate"
        className={`${styles.textHeading}`}
      >
        KIM DO KYUNG
      </motion.h2>
      <div className="flex items-center gap-4">
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain cursor-pointer 
            invert-0 dark:invert"
        />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
