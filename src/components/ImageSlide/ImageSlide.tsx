import React from "react";

interface CardProps {
  title: string;
  description: string;
  bgImage?: string;
}

const ImageSlide: React.FC<CardProps> = ({ title, description, bgImage }) => {
  return (
    <div
      className={`${
        bgImage ? bgImage : "bg-[#284B63]"
      } flex flex-col md:flex-row justify-between md:items-center p-12 w-full bg-cover bg-no-repeat bg-center min-h-[300px]`}
    >
      <h2 className="text-[60px] text-white font-prisma leading-[80px] mb-[2rem] max-w-[100px]">
        {title}
      </h2>
      <p className="text-xl text-[#edede9] font-inter max-w-[600px]">
        {description}
      </p>
    </div>
  );
};

export default ImageSlide;
