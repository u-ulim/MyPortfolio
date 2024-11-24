import React from "react";

const ModalContent = ({
  title,
  subTitle01,
  subTitle01Img,
  subTitle02,
  subTitle02Img,
  img,
  description,
}) => {
  return (
    <div>
      {title && (
        <h2 className="text-[32px] font-semibold mb-[12px]">{title}</h2>
      )}
      {subTitle01 && (
        <>
          <h3 className="text-[18px] sm:text-[24px] font-semibold mb-[12px]">
            {subTitle01}
          </h3>
          {subTitle01Img && (
            <img
              src={subTitle01Img}
              alt={title}
              className="w-full object-contain"
            />
          )}
        </>
      )}
      {img && (
        <img
          src={img}
          alt={title}
          className="w-full h-[300px] object-cover mb-[12px]"
        />
      )}
      {description && (
        <p className="font-normal text-[16px] text-gray-400">{description}</p>
      )}
      {subTitle02 && (
        <h1 className="text-[24px] sm:text-[32px] font-bold mb-[32px]">
          {subTitle02}
        </h1>
      )}
    </div>
  );
};

export default ModalContent;
