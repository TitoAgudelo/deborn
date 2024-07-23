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
      "Premium General Contractor for total site development, experienced in federal, state and county contracting as well as private commercial projects.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-black-alt",
    whiteText: true,
  },
  {
    name: "Demolition",
    value:
      "Our projects begin with demolition of areas in need of improvement and replacement. The demolished materials are responsibly recycled.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-blue-light",
    whiteText: false,
  },
  {
    name: "Erosion and Sediment Control",
    value:
      "Expert and experienced in responsible land disturbance, stormwater management and bioretention construction.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-black-alt",
    whiteText: true,
  },
  {
    name: "Excavation & Grading",
    value:
      "Excavation and grading for site development, utilities, concrete walkways and asphalt paving, specialty surfacing, lighting and other site amenities.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-green-alt",
    whiteText: true,
  },
  {
    name: "Underground Utilities: Water, Sewer & Storm",
    value:
      "Water, sewer and storm utility construction and bioretention construction. Water line installation and plumbing for drinking and water fountains and other site features.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-green-light",
    whiteText: false,
  },
  {
    name: "Municipal Street Improvements",
    value:
      "Infrastructure such as new water line and storm sewer replacement and improvement, asphalt paving, concrete sidewalks, signage, ADA improvements and lighting.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-blue-light",
    whiteText: false,
  },
  {
    name: "Park & Playground Development",
    value:
      "Building parks and playgrounds for communities to enjoy for generations, with fun play areas, poured in place rubber safety surfacing, seat walls, shade structures, picnic areas, fencing, drinking fountains, landscaping and other fine amenities.",
    icon: <GrValidate color="#3C6E71" />,
    color: "bg-green-alt",
    whiteText: true,
  },
];

export default function Home() {
  return (
    <div className="pb-10">
      <Hero />
      <Cta
        title="About Us"
        content="Providing construction services in Virginia, Maryland and Washington with pride since 2002 from our location in Prince William County, DeBorn has been a leading force in the construction industry as a Class A Licensed Heavy Highway & General Build contractor."
      />
      <ImageSlide
        title="​​Harbor Drive Wellness Park"
        description="This beautiful Prince William County park has a colorful playground, two adult fitness areas, a walking and bike trail and lawn and landscape enhancements. It has become a central area for neighbors to enjoy what was once an old abandoned commuter lot. This park playground is a forerunner in inclusive play and fitness equipment. It features a central lawn area where people meet to play ball, have yoga classes, picnic and enjoy other activities.The park even has a bicycle repair station to encourage fitness."
        bgImage="bg-image-project"
      />
      <Cta
        title="Services"
        content="At DeBorn Construction, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's why you should choose us:"
        cards={cards}
      />
      <ImageSlide
        title="EUGENE SIMPSON STADIUM PARK"
        description="Simpson Park playground in the Alexandria Del Ray neighborhood features natural wood parkour play equipment and unique play structures created by artists May and Watkins, walkways that connect to gardens and stadium ball fields, new extensive storm drainage system under concrete previous pavers and in the playground area. The front gate into the playground is colorful and connects to concrete columns and seat walls."
        bgImage="bg-image-project-one"
      />
    </div>
  );
}
