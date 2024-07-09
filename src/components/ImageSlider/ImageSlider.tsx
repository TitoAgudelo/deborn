"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  "/assets/images/Battleview.jpg",
  "/assets/images/project.jpg",
  "/assets/images/project1.jpg",
];

const ImageSlider: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + images.length) % images.length;
    setPage([newPage, newDirection]);
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-900 antialiased">
      <div className="relative w-full overflow-hidden h-screen">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="flex w-full rounded-lg overflow-hidden"
            key={page}
            src={images[page]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => paginate(-1)}
        >
          <IoIosArrowBack
            color="white"
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          />
        </button>
        <button
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => paginate(1)}
        >
          <IoIosArrowForward
            color="white"
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
