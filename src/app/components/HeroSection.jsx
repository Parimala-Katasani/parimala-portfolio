"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-12 sm:mt-7">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-900">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Parimala Katasani",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Hustling in the realm of web development, I&#39;m on the lookout for the ideal opportunity to showcase my skills and make a meaningful impact!</p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-400 to-yellow-600 hover:bg-blue-500 text-white hover:scale-110"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1P7_9gPHVSKLUHYJY9D2OpIFnwhWjxfw4/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 hover:bg-slate-800 text-white mt-3 mb-10"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* <div className="relative"> */}
          <div className=" w-[250px] h-[400px] lg:w-[400px] lg:h-[400px] sm:w-[200px] sm:h-[300px] relative">
            <Image
              src="/images/img-hero.png" 
              alt="hero image"
              className="absolute transform -translate-y-10  "
              // className="absolute transform -translate-x-25 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={130}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
