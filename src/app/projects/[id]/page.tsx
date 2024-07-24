import React from "react";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

interface ProjectProps {
  params: {
    id: string;
  };
}

const ProjectsPageDetail: React.FC<ProjectProps> = ({ params }) => {
  const projects = [
    {
      id: "1",
      firstImage: false,
      name: "Harbor Drive Wellness Park",
      description:
        "This beautiful Prince William County park has a colorful playground, two adult fitness areas, a walking and bike trail and lawn and landscape enhancements. It has become a central area for neighbors to enjoy what was once an old abandoned commuter lot. This park playground is a forerunner in inclusive play and fitness equipment. It features a central lawn area where people meet to play ball, have yoga classes, picnic and enjoy other activities.The park even has a bicycle repair station to encourage fitness.",
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
        "Simpson Park playground in the Alexandria Del Ray neighborhood features natural wood parkour play equipment and unique play structures created by artists May and Watkins, walkways that connect to gardens and stadium ball fields, new extensive storm drainage system under concrete pervious pavers and in the playground area. The front gate into the playground is colorful and connects to concrete columns and seat walls.",
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

  const currentProject = projects.find((project) => project.id === params.id);

  return (
    <section>
      {currentProject?.gallery && (
        <ImageSlider gallery={currentProject?.gallery} />
      )}
      <div className="container mx-auto flex flex-col my-10 pb-10">
        <h2 className="text-[40px] md:text-[60px] leading-[50px] md:leading-[80px] text-[#284B63] font-inter font-bold mb-6">
          {currentProject?.name}
        </h2>
        <p className="font-inter text-xl text-light-text">
          {currentProject?.description}
        </p>
      </div>
    </section>
  );
};

export default ProjectsPageDetail;
