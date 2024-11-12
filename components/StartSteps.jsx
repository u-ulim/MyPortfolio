import React from "react";
import styles from "../styles";
import { ArrowDownIcon, FileArrowDownIcon } from "./icons";

const StartSteps = ({ number, text }) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[28px] bg-[#323f5d] dark:bg-gray-200 cursor-pointer`}
      >
        <FileArrowDownIcon className="w-[24px] object-contain text-gray-200 dark:text-gray-900" />
        {/* <p className="font-bold text-[20px] text-white">{number}</p> */}
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#666666] dark:text-gray-300 leading-[32.4px]">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;
