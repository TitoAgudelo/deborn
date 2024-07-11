import React from "react";

interface CardProps {
  title: string;
  description?: string;
  bgImage: string;
}

const CardImage: React.FC<CardProps> = ({ title, description, bgImage }) => {
  return (
    <div
      className={`${bgImage} flex flex-col p-6 rounded-3xl w-full bg-cover h-[300px] justify-end relative overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer`}
    >
      <div className="bg-gradient-mask absolute w-full h-full left-0 top-0" />
      <div className="flex flex-col relative">
        <h6 className={`font-dmSans text-dark-text text-xl font-semibold mb-2`}>
          {title}
        </h6>
        <p className={`font-dmSans text-base text-dark-text`}>{description}</p>
      </div>
    </div>
  );
};

export default CardImage;
