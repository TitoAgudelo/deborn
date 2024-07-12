import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectProps {
  id: string;
  name: string;
  description?: string;
  imageProject: string;
  firstImage: boolean;
}

interface CardProps {
  project: ProjectProps;
}

const SideCard: React.FC<CardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className={`flex ${
          project.firstImage ? "flex-row-reverse" : "flex-row"
        } p-6 gap-20 rounded-3xl w-full bg-cover h-[500px] justify-end relative overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer my-10`}
      >
        <div className="flex flex-col relative w-1/2 z-10">
          <h6
            className={`text-[40px] text-light-text font-prisma leading-[50px] mb-[2rem] max-w-[350px]`}
          >
            {project.name}
          </h6>
          <p className={`font-inter text-xl text-light-text`}>
            {project.description}
          </p>
        </div>
        <div className="w-1/2 relative overflow-hidden rounded-xl z-10">
          <Image
            src={project.imageProject}
            alt="Image Card Project"
            objectFit="cover"
            fill
          />
        </div>
        <div className="absolute bg-[url('/assets/images/bg-project.png')] bottom-0 left-0 w-full h-24 z-0" />
      </div>
    </Link>
  );
};

export default SideCard;
