import Cta from "@/components/Cta/Cta";
import Hero from "@/components/Hero/Hero";
import { GrValidate } from "react-icons/gr";
import ImageSlide from "@/components/ImageSlide/ImageSlide";

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
    name: "Quality Assurance",
    value: "Meticulous attention to detail and craftsmanship.",
    icon: <GrValidate color="white" />,
    color: "bg-blue-light",
  },
  {
    name: "Client-Centric Approach",
    value: "Effective, transparent, and collaborative",
    icon: <GrValidate color="white" />,
    color: "bg-yellow-light",
  },
  {
    name: "Proven Track Record",
    value: "We have a decade of successful projects.",
    icon: <GrValidate color="white" />,
    color: "bg-green-light",
  },
];

export default function Home() {
  return (
    <>
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
        title="Lasted Projects"
        content="At DeBorn Construction, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's why you should choose us:"
        cards={cards}
      />
    </>
  );
}
