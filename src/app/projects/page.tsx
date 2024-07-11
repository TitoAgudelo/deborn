import React from "react";
import HeroAlt from "@/components/HeroAlt/HeroAlt";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <HeroAlt
        title="Projects"
        image="/assets/images/project.jpg"
        subTitle="Explore Our Latest and Greatest Works"
      />
      <ImageSlider />
    </>
  );
};

export default ProjectsPage;
