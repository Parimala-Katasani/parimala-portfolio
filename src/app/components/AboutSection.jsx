"use client";
import React, { useTransition, useState } from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about" >
      <div className="md:grid md:grid-cols-2 gap-x-16  sm:mt-20 xl:gap-16  md:mt-20">
        {/* <Image src="/images/hero-image.png" width={500} height={500} /> */}
        {/* <BackgroundAnimation/> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold text-pink-500 mb-4">About Me</h2>
          <p className="text-base lg:text-xl text-justify">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with HTML, CSS, JavaScript, React, Node.js, Express and MongoDB.
            I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          
          <Link 
          href= "/education"
          class="bg-transparent text-center hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 my-5 border border-yellow-500 hover:border-transparent rounded">
            Education
          </Link>
          <Link 
          href= "/skills"
          class="bg-transparent text-center hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 mb-5 border border-yellow-500 hover:border-transparent rounded">
            Skills
          </Link>
          {/* <Link 
          href= "/certification"
          class="bg-transparent text-center hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
            Certifications
          </Link> */}

        </div>
        <BackgroundAnimation/>
      </div>
    </section>
  );
};

export default AboutSection;
