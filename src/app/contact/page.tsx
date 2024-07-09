import React from "react";
import HeroAlt from "@/components/HeroAlt/HeroAlt";
import Contact from "@/components/Contact/Contact";

const ContactPage: React.FC = () => {
  return (
    <>
      <HeroAlt title="Contact Us" image="/assets/images/project.jpg" />
      <section className="flex w-full container mx-auto py-24 items-center">
        <h3 className="text-5xl font-inter font-black text-light.text px-10">
          Get In Touch!
        </h3>
        <p className="text-lg font-inter text-light.primary max-w-[850px]">
          We'd love to hear from you! Whether you have a question about our
          services, need assistance, or just want to talk, feel free to reach
          out. Our team is here to help and ensure you have the best experience
          possible.
        </p>
      </section>
      <Contact />
    </>
  );
};

export default ContactPage;
