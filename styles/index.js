const styles = {
  innerWidth: "2xl:max-w-[1280px] w-full",
  interWidth: "lg:w-[80%] w-[100%]",

  paddings: "sm:p-16 xs:p-8 px-6 py-12",
  // yPaddings: "sm:py-16 xs:py-8 py-12",
  xPaddings: "sm:px-16 px-6",
  topPaddings: "sm:pt-16 xs:pt-8 pt-12",
  bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end",
  navPadding: "pt-[98px]",

  // hero section
  heroHeading:
    "font-bold lg:text-[120px] md:text-[120px] sm:text-[100px] text-[60px] lg:leading-[120%] md:leading-[140%] sm:leading-[140%] leading-[70%]  uppercase text-[#1a1a1a]",

  textHeading:
    "font-bold text-[24px] lg:text-[24px] md:text-[24px] sm:text-[24px] lg:leading-[120%] md:leading-[140%] sm:leading-[140%] leading-[140%] uppercase bg-gradient-to-r from-[#2dd4bf] via-[#1a1a1a] to-[#2dd4bf] text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient",

  textFooterHeading:
    "font-bold text-[44px] lg:text-[64px] md:text-[64px] sm:text-[24px] lg:leading-[120%] md:leading-[140%] sm:leading-[140%] leading-[140%] uppercase bg-gradient-to-r from-[#2dd4bf] via-[#1a1a1a] to-[#2dd4bf] text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient",

  heroGradientBox: `absolute  w-full h-[300px]  sm:h-[500px] rounded-tl-[140px] z-[0] -top-[30px] 
    bg-[#FF7FFF]/5
    backdrop-blur-sm
    bg-gradient-to-r from-[#2dd4bf]/5 via-transparent to-[#2dd4bf]/5
    before:content-[''] before:absolute before:inset-0 
    before:rounded-tl-[140px] before:border-t-[#FF7FFF]/30 
    before:border-t-[1px] before:top-[6px]`,

  heroOText:
    "font-bold lg:text-[120px] md:text-[160px] sm:text-[100px] text-[70px] lg:leading-[120%] md:leading-[140%] sm:leading-[140%] leading-[140%] uppercase text-[#1a1a1a] bg-gradient-to-r from-[#2dd4bf] via-[#1a1a1a] to-[#2dd4bf] text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient",

  heroDText:
    "lg:w-[140px] md:w-[180px] sm:w-[120px] w-[60px] lg:h-[90px] md:h-[90px] sm:h-[60px] h-[40px] lg:border-[15px] md:border-[15px] sm:border-[8px] border-[6px] rounded-r-[50px] border-light-text dark:border-dark-text sm:mx-2 mx-[6px]",

  insightCardBorder:
    "lg:flex hidden items-center justify-center items-center border border-gray-300 dark:border-white-900 w-[70px] h-[70px] rounded-full",

  // starrySky
  noiteBg:
    "w-full h-full absolute bg-gradient-to-b from-white via-[#e0e7ff] to-[#f3f4f6] dark:bg-gradient-to-b dark:from-black dark:via-[#191327] dark:to-[#2b2048]",

  estrela: "bg-white rounded-full absolute animate-estrela",
  exploreModalList: "flex gap-[12px] mt-[12px] text-[14px]",
  exploreModalListTitle:
    "flex flex-[0.5] sm:flex-[0.3] gap-[4px] text-gray-500 ",
  exploreModalListContent:
    "flex flex-[0.5] sm:flex-1 w-[250px] whitespace-nowrap overflow-hidden overflow-ellipsis text-ellipsis",
};

export default styles;
