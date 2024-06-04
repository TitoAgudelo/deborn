import Cta from "@/components/Cta/Cta";
import Hero from "@/components/Hero/Hero";
import { GrValidate } from "react-icons/gr";

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
        title="Our Legacy of Excellence"
        content="Providing construction services in Virginia, Maryland and Washington with pride since 2002 from our location in Prince William County. DeBorn has been a leading force in the construction industry, specializing in Class A Licensed Heavy Highway & General Build."
        tiles={tiles}
      />
      <Cta
        title="Why Choose DeBorn Construction Inc."
        content="At DeBorn Construction, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's why you should choose us:"
        cards={cards}
      />
    </>
  );
}
