"use client";
import React from "react";
import Image from "next/image";

interface HeroAltProps {
  title: string;
  image: string;
}

const HeroAlt = ({ title, image }: HeroAltProps) => {
  return (
    <section className="w-full relative bg-[#284B63] flex flex-col md:flex-row justify-between mt-[68px] md:mt-[82px] px-[5rem] py-[3rem]">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-[#edede9] font-prisma font-black text-3xl md:text-[90px] flex-wrap text-wrap md:leading-[85px] mb-4">
          {title}
        </h1>
      </div>
      <div className="flex flex-col relative">
        <div className="pb-4 pr-4 bg-[#edede9] rounded-lg overflow-hidden">
          <Image src={image} width="600" height="600" alt="hero Alt 1" />
        </div>
      </div>
    </section>
  );
};

export default HeroAlt;
