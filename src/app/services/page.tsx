import React from "react";
import HeroAlt from "@/components/HeroAlt/HeroAlt";
import Services from "@/components/Services/Services";

const ServicesPage: React.FC = () => {
  return (
    <>
      <HeroAlt
        title="Services"
        image="/assets/images/project1.jpg"
        subTitle="Discover the Comprehensive Solutions We Offer"
      />
      <Services />
    </>
  );
};

export default ServicesPage;
