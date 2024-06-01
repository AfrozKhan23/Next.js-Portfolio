"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { saveAs } from "file-saver";

const saveFile = () => {
  saveAs(
    "https://drive.google.com/file/d/1-ImWKiQCLQ25ry9fArGkoPtk5YSIjgsu/view",
    "Resume.pdf"
  );
};

const Herosection = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              {" "}
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Afroz Khan",
                1000,
                "Web Developer",
                1000,
                "Front end Developer",
                1000,
                "Back end Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            MCA aspirant looking forward to take step in web development career.
          </p>
          <a href="https://www.linkedin.com/in/afroz-khan-b685bb273/">
            <button className="px-6 py-3 mr-4 rounded-full w-full sm:w-fit bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-3 cursor-pointer text-center">
              Hire ME
            </button>
          </a>

          <Link href="">
            <button
              onClick={saveFile}
              className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-3 cursor-pointer text-center"
            >
              <span className="block bg-[#121212] rounded-full hover:bg-slate-800 px-5 py-2">
                Download CV
              </span>
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              className="absolute rounded-full  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
