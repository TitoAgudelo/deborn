import React from "react";
import CardImage from "../CardImage/CardImage";

const services = [
  {
    imageBg: 'bg-[url("/assets/images/generalphotos/erosion.jpg")]',
    title: "Erosion and Sediment Control",
    description:
      "Expert and experienced in responsible land disturbance, stormwater management and bioretention construction.",
  },
  {
    imageBg: 'bg-[url("/assets/images/generalphotos/playground.jpg")]',
    title: "Park & Playground Development",
    description:
      "Building parks and playgrounds for communities to enjoy for generations, with fun play areas, poured in place rubber safety surfacing, seat walls, shade structures, picnic areas, fencing, drinking fountains, landscaping and other fine amenities.",
  },
  {
    imageBg:
      'bg-[url("/assets/images/generalphotos/underground-utilities.jpg")]',
    title: "Underground Utilities: Water, Sewer & Storm",
    description:
      "Water, sewer and storm utility construction and bioretention construction. Water line installation and plumbing for drinking and water fountains and other site features.",
  },
  {
    imageBg: 'bg-[url("/assets/images/generalphotos/excavation.jpg")]',
    title: "Excavation & Grading",
    description:
      "Excavation and grading for site development, utilities, concrete walkways and asphalt paving, specialty surfacing, lighting and other site amenities.",
  },
  {
    imageBg: 'bg-[url("/assets/images/generalphotos/demolition.jpg")]',
    title: "Demolition",
    description:
      "Our projects begin with demolition of areas in need of improvement and replacement. The demolished materials are responsibly recycled.",
  },
  {
    imageBg:
      'bg-[url("/assets/images/generalphotos/construction-management.jpg")]',
    title: "Construction Management",
    description:
      "Premium General Contractor for total site development, experienced in federal, state and county contracting as well as private commercial projects.",
  },
  {
    imageBg: 'bg-[url("/assets/images/generalphotos/municipal-street.jpg")]',
    title: "Municipal Street Improvements",
    description:
      "Infrastructure such as new water line and storm sewer replacement and improvement, asphalt paving, concrete sidewalks, signage, ADA improvements and lighting.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-[40px] md:text-[60px] leading-[50px] md:leading-[80px] text-[#284B63] font-inter font-bold mb-6">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <CardImage
            title={service.title}
            description={service.description}
            bgImage={service.imageBg}
            key={"service-" + index}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
