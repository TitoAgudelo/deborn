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
    </>
  );
};

export default AboutUsPage;
