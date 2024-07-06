"use client";
import Image from "next/image";
import React from "react";

interface Licence {
  url: string;
  alt: string;
}

interface CardProps {
  title: string;
  licenses: Licence[];
}

const Licenses: React.FC<CardProps> = ({ title, licenses }) => {
  return (
    <div
      className={`flex flex-col items-center p-12 w-full bg-cover bg-no-repeat bg-center min-h-[300px] container mx-auto`}
    >
      <h2 className="text-[40px] md:text-[60px] leading-[50px] md:leading-[80px] text-[#284B63] font-inter font-bold mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 flex-wrap gap-8 justify-around mt-10 w-full">
        {licenses.map((license, index) => (
          <div className="flex justify-center" key={"license-" + index}>
            <Image
              src={license.url}
              alt={license.alt}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Licenses;
