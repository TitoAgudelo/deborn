import React from "react";
import CardImage from "../CardImage/CardImage";

const services = [
  {
    imageBg:
      'bg-[url("/assets/images/services/beautiful-piece-forest-daylight.jpg")]',
    title: "Erosion and Sediment Control",
    description: "Erosion and Sediment Control",
  },
  {
    imageBg: 'bg-[url("/assets/images/services/city-park.jpg")]',
    title: "Park & Playground Development",
    description: "Erosion and Sediment Control",
  },
  {
    imageBg:
      'bg-[url("/assets/images/services/full-shot-environmental-engineer-with-water-sample.jpg")]',
    title: "Underground Utilities: Water, Sewer & Storm",
    description: "Erosion and Sediment Control",
  },
  {
    imageBg:
      'bg-[url("/assets/images/services/heavy-excavator-digging-day-light-outdoors.jpg")]',
    title: "Excavation & Grading",
    description: "Erosion and Sediment Control",
  },
  {
    imageBg:
      'bg-[url("/assets/images/services/heavy-excavator-digging-day-light.jpg")]',
    title: "Demolition",
    description: "Erosion and Sediment Control",
  },
  {
    imageBg:
      'bg-[url("/assets/images/services/professional-architects-looking-plan.jpg")]',
    title: "Construction Management",
    description: "Erosion and Sediment Control",
  },
  {
    imageBg:
      'bg-[url("/assets/images/services/long-shot-man-with-protective-gear.jpg")]',
    title: "Municipal Street Improvements",
    description: "Erosion and Sediment Control",
  },
  {
    imageBg:
      'bg-[url("/assets/images/services/view-heavy-machinery-used-construction-industry.jpg")]',
    title: "Clearing & Grubbing",
    description: "Erosion and Sediment Control",
  },
];

const Services: React.FC = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-[40px] md:text-[60px] leading-[50px] md:leading-[80px] text-[#284B63] font-inter font-bold mb-6">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <CardImage
            title={service.title}
            description={service.description}
            bgImage={service.imageBg}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
