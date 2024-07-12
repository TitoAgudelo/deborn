import React from "react";
import HeroAlt from "@/components/HeroAlt/HeroAlt";
import SideCard from "@/components/SideCard/SideCard";

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: "1",
      firstImage: false,
      name: "Harbor Drive Wellness Park",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageProject: "/assets/images/HarborDriveWellnessPark/HarborDrive5.jpg",
      gallery: [
        "/assets/images/HarborDriveWellnessPark/FitnessArea.jpg",
        "/assets/images/HarborDriveWellnessPark/HarborDrive.jpg",
        "/assets/images/HarborDriveWellnessPark/HarborDrive2.jpg",
        "/assets/images/HarborDriveWellnessPark/HarborDrive3.jpg",
        "/assets/images/HarborDriveWellnessPark/HarborDrive4.jpg",
        "/assets/images/HarborDriveWellnessPark/HarborDrive5.jpg",
        "/assets/images/HarborDriveWellnessPark/HarborDriveWellnessPark.jpg",
      ],
    },
    {
      id: "2",
      firstImage: true,
      name: "NVCC Manassas Battleview",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageProject:
        "/assets/images/NVCCManassasBattleview/Battleview Building Bioretention Area.jpg",
      gallery: [
        "/assets/images/NVCCManassasBattleview/battleview Bldg Bridge.jpg",
        "/assets/images/NVCCManassasBattleview/Battleview Building -Biorention.jpg",
        "/assets/images/NVCCManassasBattleview/Battleview Building Bioretention Area.jpg",
        "/assets/images/NVCCManassasBattleview/Battleview Building Concrete.jpg",
        "/assets/images/NVCCManassasBattleview/Battleview Building in progress.jpg",
        "/assets/images/NVCCManassasBattleview/Bridge 2.jpg",
        "/assets/images/NVCCManassasBattleview/Concrete Storm Flume- battleview.jpg",
        "/assets/images/NVCCManassasBattleview/Paving.jpg",
        "/assets/images/NVCCManassasBattleview/Steps 2 and Railings Battleview Bldg.jpg",
        "/assets/images/NVCCManassasBattleview/Steps 3 and Railings Battleview Bldg.jpg",
        "/assets/images/NVCCManassasBattleview/Steps battleview.jpg",
        "/assets/images/NVCCManassasBattleview/Walkway and new paved parking lot- Battleview.jpg",
      ],
    },
    {
      id: "3",
      firstImage: false,
      name: "Simpson Park Playground",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageProject: "/assets/images/SimpsonParkPlayground/Play Equipment.jpg",
      gallery: [
        "/assets/images/SimpsonParkPlayground/Play Equipment.jpg",
        "/assets/images/SimpsonParkPlayground/Eugene Simpson Park Playground.jpg",
        "/assets/images/SimpsonParkPlayground/Simpson Park 1.jpg",
        "/assets/images/SimpsonParkPlayground/Simpson Park 2.jpg",
        "/assets/images/SimpsonParkPlayground/Simpson Park in progress 2.jpg",
        "/assets/images/SimpsonParkPlayground/Simpson Park in progress.jpg",
        "/assets/images/SimpsonParkPlayground/Simpson Park.jpg",
      ],
    },
  ];

  return (
    <>
      <HeroAlt
        title="Projects"
        image="/assets/images/project.jpg"
        subTitle="Explore Our Latest and Greatest Works"
      />
      <section className="container mx-auto flex flex-col w-full py-10">
        <h2 className="text-[40px] md:text-[60px] leading-[50px] md:leading-[80px] text-[#284B63] font-inter font-bold mb-6">
          Some Our Projects
        </h2>
        {projects.map((project, index) => (
          <SideCard project={project} key={"project-card-" + index} />
        ))}
      </section>
    </>
  );
};

export default ProjectsPage;
