"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const history = useRouter();

  return (
    <section className="bg-gradient-hero w-full pt-[82px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col pt-20 pb-28">
          <h1 className="text-6xl text-light-text font-dmSans leading-[86px]">
            Constructing Excellence with Precision
          </h1>
          <p className="text-xl text-light-text">
            Welcome to Deborn Contruction Inc, your trusted partner in
            construction. With a legacy of excellence and a commitment to
            quality, we transform your visions into reality.
          </p>
          <button
            className="rounded-full px-6 py-3 bg-white text-light-text text-base text-center font-dmSans font-semibold border border-light-text w-fit hover:bg-light-text hover:text-white mt-14"
            onClick={() => history.push("/about-us")}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
