"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Icons for hamburger menu

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const history = useRouter();
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

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
      className={`bg-[#16425b] text-white py-4 fixed w-full top-0 z-20 shadow-md px-4 md:px-0 ${
        scrolled ? "scrolled" : ""
      }`}
      ref={headerRef}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image
            src="/assets/images/Logo-horizontal.svg"
            alt="logo"
            width="280"
            height="40"
            className="w-[200px] md:w-[280px]"
          />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <nav className="menu">
            <ul className="flex items-center gap-10">
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
          <button
            className="rounded-full px-6 py-3 border border-white text-white font-dmSans font-semibold hover:bg-light-text hover:text-white"
            onClick={handleContact}
          >
            Get in touch
          </button>
        </div>

        <div className="lg:hidden">
          <button
            className="text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden">
          <ul className="flex flex-col items-center bg-[#16425b] py-4">
            <li className="text-white text-base font-bold hover:font-black font-prisma w-full text-center py-2 uppercase">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="text-white text-base font-bold hover:font-black font-prisma w-full text-center py-2 uppercase">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="text-white text-base font-bold hover:font-black font-prisma w-full text-center py-2 uppercase">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-white text-base font-bold hover:font-black font-prisma w-full text-center py-2 uppercase">
              <button
                className="w-full py-2"
                onClick={() => {
                  setMenuOpen(false);
                  handleContact();
                }}
              >
                Get in touch
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
