"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Next.js, Tailwindcss",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Travel Booking Website",
    description: "React.js, Express.js, Node.js, MongoDB",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Parimala-Katasani/Travel-Booking",
    previewUrl: "https://github.com/Parimala-Katasani/Travel-Booking",
  },
  {
    id: 3,
    title: "Static Landing page",
    description: "Html, CSS, JavaScript",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Parimala-Katasani/Travel-landingpage",
    previewUrl: "https://parimala-katasani.github.io/Travel-landingpage/Travel-landingpage/index.html",
  },
  {
    id: 4,
    title: "Text-to-image Encryption",
    description: "Html, CSS, JavaScript",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Parimala-Katasani/Text_to_image_encryption",
    previewUrl: "https://parimala-katasani.github.io/Text_to_image_encryption/",
  },
  {
    id: 5,
    title: "QR Code Generator",
    description: "Html, CSS, JavaScript",
    image: "/images/projects/5.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/Parimala-Katasani/qr-code-generator",
    previewUrl: "https://parimala-katasani.github.io/qr-code-generator/",
  },
  {
    id: 6,
    title: "Face Recognition Project",
    description: "Javascript, Tensorflow",
    image: "/images/projects/6.jpg",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/Parimala-Katasani/face-recognition",
    previewUrl: "https://face-api-js.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-0 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
