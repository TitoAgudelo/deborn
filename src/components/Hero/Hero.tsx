"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Hero: React.FC = () => {
  const history = useRouter();

  return (
    <section className="w-full h-screen relative bg-[#284B63] flex flex-col md:flex-row justify-between mt-[68px] md:mt-[82px] px-[5rem] py-[3rem]">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-[#edede9] font-prisma font-black text-3xl md:text-[90px] flex-wrap text-wrap max-w-[300px] md:leading-[85px] mb-4">
          DeBorn Construction Inc.
        </h1>
        <p className="text-[#edede9] font-dmSans text-lg font-light max-w-[600px]">
          General Contractor Commercial Site Development & Utility Construction
        </p>
      </div>
      <div className="flex flex-col relative">
        <div className="pb-4 pr-4 bg-[#edede9] rounded-lg overflow-hidden">
          <Image
            src="/assets/images/hero1.JPG"
            width="600"
            height="600"
            alt="hero 1"
          />
        </div>
        <div className="pb-4 pr-4 bg-[#edede9] absolute bottom-20 -left-10 rounded-lg overflow-hidden">
          <Image
            src="/assets/images/Harbor.jpg"
            width="300"
            height="300"
            alt="hero 2"
          />
        </div>
      </div>
    </section>
    // <section className="bg-hero-bg-battle bg-no-repeat bg-cover bg-blend-normal w-full pt-[82px] h-screen relative flex justify-center items-center">
    //   {/* this is the second version
    //   <div className="bg-black-rgba h-full absolute w-full top-0" />
    //   <div className="z-20 flex flex-col items-center justify-center">
    //     <Image
    //       src="/assets/images/logo3x.svg"
    //       alt="logo deborn"
    //       width="400"
    //       height="180"
    //     />
    //     <h2 className="text-white font-playfair text-5xl mt-6 text-center max-w-[1100px] leading-[70px]">
    //       General Contractor Commercial Site Development & Utility Construction
    //     </h2>
    //   </div> */}
    //   {/** this is the initial version  */}
    //   {/* <div className="container mx-auto flex justify-between items-center z-10 relative">
    //     <div className="flex flex-col pt-20 pb-28">
    //       <h1 className="text-6xl text-light-text font-dmSans leading-[86px]">
    //         DeBorn General Contractor
    //       </h1>
    //       <p className="text-xl text-black-text">
    //         Your trusted partner in construction. With a legacy of excellence
    //         and a commitment to quality, we transform your visions into reality.
    //       </p>
    //       <button
    //         className="rounded-full px-6 py-3 bg-white text-light-text text-base text-center font-dmSans font-semibold border border-light-text w-fit hover:bg-light-text hover:text-white mt-14"
    //         onClick={() => history.push("/about-us")}
    //       >
    //         Learn More
    //       </button>
    //     </div>
    //   </div> */}
    // </section>
  );
};

export default Hero;
