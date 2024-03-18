"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Pizza App",
    description:
      "Pizza App built with React, redux/toolkit, react-router-dom and Tailwind",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/AfrozKhan23/React-Pizza-App",
    previewUrl: "https://pizza-app1-react.netlify.app/",
  },
  {
    id: 2,
    title: "React Keeper App",
    description: "Keeper website built with React and Material UI",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/AfrozKhan23/Keeper-App",
    previewUrl: " https://keeper-app-7e580.web.app/",
  },
  {
    id: 3,
    title: "React Shopping website",
    description: "Landing page built with React and Tailwind",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/AfrozKhan23/Mixtas-React-LP",
    previewUrl: "https://stately-scone-13832d.netlify.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2
        className="text-center text-4xl font-bold text-white mt-4 mb-5"
        id="projects"
      >
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
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
              imageUrl={project.image}
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
