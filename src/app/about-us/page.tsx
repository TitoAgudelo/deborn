import Cta from "@/components/Cta/Cta";
import HeroAlt from "@/components/HeroAlt/HeroAlt";
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <HeroAlt title="About Us" image="/assets/images/about_tito.webp" />
      <Cta
        title="Class A Licensed Heavy Highway & General Build"
        content="Providing construction services in Virginia, Maryland and Washington with pride since 2002 from our location in Prince William County. DeBorn has been a leading force in the construction industry, specializing in Class A Licensed Heavy Highway & General Build."
        size="sm"
      />
      <section className="container mx-auto pb-10">
        <p className="font-dmSans italic text-light-text text-xl font-bold">
          "Each project is completed in a timely and cost - effective manner by
          making sure safety, quality and efficiency is our priority every
          single day,"
        </p>
        <p className="font-inter text-light-text text-xl my-3">
          Tito A. Munoz President of DeBorn Construction Inc.
        </p>
        <ul>
          <li>VA Class A Licensed</li>
          <li>Commercial Building (CBC)</li>
          <li>Heavy Highway (H/H)</li>
          <li>Plumbing (PLB)</li>
          <li>Residential (RBC)</li>
          <li>Certified SBA 8A Contractor</li>
        </ul>
      </section>
    </>
  );
};

export default AboutUsPage;
