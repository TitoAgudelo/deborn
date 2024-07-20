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
        "This beautiful Prince William County park has a colorful playground, two adult fitness areas, a walking and bike trail and lawn and landscape enhancements with a new parking lot. It has become a central area for neighbors to enjoy what was once an old abandoned commuter lot. This playground is a forerunner in inclusive play and fitness equipment. It features a central lawn area where people meet to play ball, have yoga classes, picnic and enjoy other activities. The park even has a bicycle repair station to encourage fitness.",
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
      name: "NVCC Manassas Battleview Building Site Improvements",
      description:
        "Site upgrades included stormwater improvements with pipe, structures, trench drains and a landscaped bioretention area, new asphalt parking lot with signage and marking, concrete sidewalks, concrete pedestrian bridge with electric ice melt system, concrete steps, hand railings and concrete islands with landscaping. All work was efficiently and safely performed while students and faculty were in school session using the building.",
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
        "Simpson Park playground in the Alexandria Del Ray neighborhood features natural wood parkour play equipment and unique play structures created by artists May and Watkins, walkways that connect to gardens and stadium ball fields, new extensive storm drainage system under previous concrete pavers and in the playground area. The front gate into the playground is colorful and connects to concrete columns and seat walls.",
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

  const otherProjects = [
    "Federal Aviation Administration, U.S. Department of Transportation",
    "Bureau of Land Management, Department of the Interior",
    "Fairfax County Park Authority",
    "Prince William County Department of Parks, Recreation and Tourism",
    "Northern Virginia Community College",
    "City of Alexandria Recreation, Parks and Cultural Activities",
    "Town of Warrenton",
    "Town of Leesburg",
    "Manassas City Public Schools",
    "Alexandria City Public Schools",
    "Frederick County Public Schools",
  ];

  return (
    <>
      <HeroAlt
        title="Projects"
        image="/assets/images/project.jpg"
        subTitle="Explore a few of our latest projects"
      />
      <section className="container mx-auto flex flex-col w-full py-10">
        <h2 className="text-[40px] md:text-[60px] leading-[50px] md:leading-[80px] text-[#284B63] font-inter font-bold mb-6">
          Some Our Projects
        </h2>
        {projects.map((project, index) => (
          <SideCard project={project} key={"project-card-" + index} />
        ))}
      </section>
      <section className="container mx-auto flex flex-col w-full pt-10 pb-20">
        <h4 className="text-[20px] md:text-[30px] leading-[40px] md:leading-[80px] text-[#284B63] font-inter font-bold mb-6 uppercase">
          We have been honored to have these clients
        </h4>
        {otherProjects.map((project) => (
          <p className="font-inter text-xl text-light-text">{project}</p>
        ))}
      </section>
    </>
  );
};

export default ProjectsPage;
