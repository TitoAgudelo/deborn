import React from "react";

interface CardProps {
  name: string;
  value: string;
  icon: React.ReactElement;
  bgColor?: string;
  whiteText?: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  value,
  icon,
  bgColor = "bg-blue-light",
  whiteText,
}) => {
  return (
    <div className={`${bgColor} flex flex-col p-6 rounded-3xl w-full`}>
      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white mb-10 ml-auto shadow-md">
        {icon}
      </div>
      <h6
        className={`font-dmSans ${
          whiteText ? "text-dark-text" : "text-light-text"
        } text-xl font-semibold mb-2`}
      >
        {name}
      </h6>
      <p
        className={`font-dmSans text-sm ${
          whiteText ? "text-dark-text" : "text-light-text"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default Card;
