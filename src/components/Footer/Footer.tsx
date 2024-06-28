import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg text-white py-24">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-start">
            <div className="rounded-md flex flex-col">
              <Image
                src="/assets/images/logo-dark.png"
                alt="logo"
                width="200"
                height="45"
              />
            </div>
            <div>
              <p className="font-dmSans text-lg text-dark-text font-medium text-right">
                General Contractor
              </p>
              <p className="font-dmSans text-sm text-dark-text">
                Commercial Site Development & Utility Construction.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-between my-20">
            <div className="flex flex-col gap-6">
              <div className="">
                <Link href="/">Home</Link>
              </div>
              <div className="">
                <Link href="/about-us">About Us</Link>
              </div>
              <div className="">
                <Link href="/projects">Projects</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="">
                <Link href="/services">Services</Link>
              </div>
              <div className="">
                <Link href="/contact-us">Contact Us</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6" />
            <div className="flex flex-col gap-6 items-end">
              <div className="flex flex-row gap-4 items-center">
                <FaMapLocationDot color="white" />
                <p className="text-white font-dmSans text-sm">
                  3743 WERTZ DR, WOODBRIDGE VA 22193
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <MdEmail color="white" />
                <p className="text-white font-dmSans text-sm">
                  deborah@debornconstruction.com
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <FaPhoneAlt color="white" />
                <p className="text-white font-dmSans text-sm">
                  +1-703-298-7642
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-4">
            <p className="text-sm">© Copyright 2023 DeBorn Construction Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
