import React from "react";
import Card from "../Card/Card";

interface Tiles {
  name: string;
  value: string;
}

interface Card {
  name: string;
  value: string;
  icon: React.ReactElement;
  color: string;
  whiteText: boolean;
}

interface CtaProps {
  title: string;
  content: string;
  tiles?: Tiles[];
  cards?: Card[];
  justify?: string;
  size?: string;
}

const Cta: React.FC<CtaProps> = ({ title, content, tiles, cards, size }) => {
  return (
    <section className="bg-white w-full py-24 px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h1
            className={`font-dmSans ${
              size === "sm" ? "text-3xl" : "text-[54px] leading-[64px]"
            } text-black-alt uppercase font-bold`}
          >
            {title}
          </h1>
          <p className="font-dmSans text-light-text text-xl mt-5">{content}</p>
          {tiles && (
            <ul className="flex flex-row gap-4 justify-between mt-11">
              {tiles.map((tile, index) => (
                <li className="flex flex-col gap-4" key={"tile-" + index}>
                  <p className="font-dmSans text-light-text text-4xl">
                    {tile.value}
                  </p>
                  <p className="font-dmSans text-light-text text-base">
                    {tile.name}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {cards && (
            <div className="grid grid-cols-1 md:grid-cols-4 flex-wrap gap-8 justify-between mt-10">
              {cards.map((card, index) => (
                <Card
                  key={"card-" + index}
                  name={card.name}
                  value={card.value}
                  icon={card.icon}
                  bgColor={card.color}
                  whiteText={card.whiteText}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cta;
