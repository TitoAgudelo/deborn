import React from "react";

interface CardProps {
  name: string;
  value: string;
  icon: React.ReactElement;
  bgColor?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  value,
  icon,
  bgColor = "bg-blue-light",
}) => {
  return (
    <div className={`${bgColor} flex flex-col p-6 rounded-3xl w-full`}>
      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-black mb-10">
        {icon}
      </div>
      <h6 className="font-dmSans text-xl text-light-text font-semibold mb-2">
        {name}
      </h6>
      <p className="font-dmSans text-base text-light-text">{value}</p>
    </div>
  );
};

export default Card;
