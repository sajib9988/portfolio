"use client";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";
import { fadeTop, motionStep } from "../About/motion";
import { TProject } from "@/types/globalTypes";

export default function AllProject({
  projects,
  limit,
  home,
}: {
  projects: TProject[];
  limit?: number;
  home?: boolean;
}) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="px-6 container mx-auto mt-8 ">
      <motion.div variants={fadeTop} {...motionStep} className="mb-16">
        {/* Section Title */}
        {home ? (
          <h3 className="text-4xl mb-10 mt-3 font-semibold text-center">
            <span className="text-cyan-600 font-bold mr-2">3.</span>
            <span className="text-black dark:text-white text-shadow">
              Projects
            </span>
          </h3>
        ) : (
          <h3 className="text-4xl text-center mb-10 font-semibold">
            <span className="text-black dark:text-white text-shadow">
              {" "}
              Projects
            </span>
          </h3>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 px-2">
          {displayProjects?.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
