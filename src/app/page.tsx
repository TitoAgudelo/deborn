import Cta from "@/components/Cta/Cta";
import Hero from "@/components/Hero/Hero";
import { GrValidate } from "react-icons/gr";
import ImageSlide from "@/components/ImageSlide/ImageSlide";
import Licenses from "@/components/Licences/Licenses";

const tiles = [
  {
    name: "Projects Completed",
    value: "260+",
  },
  {
    name: "Satisfaction Rate",
    value: "95%",
  },
  {
    name: "Satisfied Clients",
    value: "200+",
  },
  {
    name: "Qualified Engineers",
    value: "100+",
  },
];

const cards = [
  {
    name: "Construction Management",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-black-alt",
    whiteText: true,
  },
  {
    name: "Demolition",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-blue-light",
    whiteText: false,
  },
  {
    name: "Clearing & Grubbing",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-green-light",
    whiteText: false,
  },
  {
    name: "Erosion and Sediment Control",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-black-alt",
    whiteText: true,
  },
  {
    name: "Excavation & Grading",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-green-alt",
    whiteText: true,
  },
  {
    name: "Underground Utilities: Water, Sewer & Storm",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-green-light",
    whiteText: false,
  },
  {
    name: "Municipal Street Improvements",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-blue-light",
    whiteText: false,
  },
  {
    name: "Park & Playground Development",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-green-alt",
    whiteText: true,
  },
];

const licenses = [
  {
    url: "/assets/images/certification-logo.png",
    alt: "Licences 1",
  },
  {
    url: "/assets/images/certification-logo.png",
    alt: "Licences 2",
  },
  {
    url: "/assets/images/certification-logo.png",
    alt: "Licences 3",
  },
  {
    url: "/assets/images/certification-logo.png",
    alt: "Licences 4",
  },
];

export default function Home() {
  return (
    <div className="pb-10">
      <Hero />
      <Cta
        title="About Us"
        content="Providing construction services in Virginia, Maryland and Washington with pride since 2002 from our location in Prince William County. DeBorn has been a leading force in the construction industry, specializing in Class A Licensed Heavy Highway & General Build."
      />
      <ImageSlide
        title="Harbor Drive"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bgImage="bg-image-project"
      />
      <Cta
        title="Services"
        content="At DeBorn Construction, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's why you should choose us:"
        cards={cards}
      />
      <ImageSlide
        title="Simpson Park"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bgImage="bg-image-project-one"
      />
      <Licenses title="Experience You Can Trust" licenses={licenses} />
    </div>
  );
}
