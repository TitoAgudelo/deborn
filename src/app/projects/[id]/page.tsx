import React from "react";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

const ProjectsPageDetail: React.FC = ({ params: any }) => {
  const projects = [
    {
      id: "1",
      firstImage: false,
      name: "Harbor Drive Wellness Park",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
    <>
      <ImageSlider gallery={currentProject?.gallery} />
    </>
  );
};

export default ProjectsPageDetail;
