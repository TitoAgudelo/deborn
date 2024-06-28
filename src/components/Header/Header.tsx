"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const history = useRouter();
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = () => history.push("/contact");

  return (
    <header
      className={`bg-[#16425b] text-white py-4 fixed w-full t-0 z-20`}
      ref={headerRef}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image
            src="/assets/images/Logo-horizontal.svg"
            alt="logo"
            width="280"
            height="40"
          />
        </div>
        <nav className="menu">
          <ul className="flex items-center gap-10">
            <li className="text-white text-base font-bold hover:font-black font-prisma w-20 text-center uppercase">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white text-base font-bold hover:font-black font-prisma w-20 text-center uppercase">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="text-white text-base font-bold hover:font-black font-prisma w-20 text-center uppercase">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="text-white text-base font-bold hover:font-black font-prisma w-20 text-center uppercase">
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          {/* <button
            className={`${
              darkMode
                ? "bg-light-bg text-light-text"
                : "bg-dark-bg text-dark-text"
            } px-6 py-3 rounded-full w-[130px]`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button> */}
          <button
            className="rounded-full px-6 py-3 border border-white text-white font-dmSans font-semibold hover:bg-light-text hover:text-white"
            onClick={handleContact}
          >
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
