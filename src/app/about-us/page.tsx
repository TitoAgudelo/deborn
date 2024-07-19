import Cta from "@/components/Cta/Cta";
import HeroAlt from "@/components/HeroAlt/HeroAlt";
import Licenses from "@/components/Licences/Licenses";
import React from "react";

const licenses = [
  {
    url: "/assets/images/certification-logo.png",
    alt: "Licences 1",
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <>
      <HeroAlt
        title="About Us"
        image="/assets/images/about_tito.webp"
        subTitle="'Each project is completed in a timely and cost - effective manner by making sure safety, quality and efficiency is our priority every single day,'"
        altText="Tito A. Munoz President of DeBorn Construction Inc."
        subTitleItalic={true}
      />
      <Cta
        title="Class A Licensed Heavy Highway & General Build"
        content="Providing construction services in Virginia, Maryland and Washington with pride since 2002 from our location in Prince William County, DeBorn has been a leading force in the construction industry as a Class A Licensed Heavy Highway & General Build contractor."
        size="sm"
      />
      <section className="container mx-auto pb-10">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          <li className="bg-[#3C6E71] rounded-lg p-2 text-white font-inter text-xl text-center">
            VA Class A Licensed
          </li>
          <li className="bg-[#3C6E71] rounded-xl p-2 text-white font-inter text-xl text-center">
            Commercial Building (CBC)
          </li>
          <li className="bg-[#3C6E71] rounded-xl p-2 text-white font-inter text-xl text-center">
            Heavy Highway (H/H)
          </li>
          <li className="bg-[#3C6E71] rounded-xl p-2 text-white font-inter text-xl text-center">
            Plumbing (PLB)
          </li>
          <li className="bg-[#3C6E71] rounded-xl p-2 text-white font-inter text-xl text-center">
            Residential (RBC)
          </li>
          <li className="bg-[#3C6E71] rounded-xl p-2 text-white font-inter text-xl text-center">
            Certified SBA 8A Contractor
          </li>
        </ul>
      </section>
      <Licenses title="Experience You Can Trust" licenses={licenses} />
    </>
  );
};

export default AboutUsPage;
