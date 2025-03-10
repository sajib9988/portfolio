"use client";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { useRef } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { TProject } from "@/types/globalTypes";



const ProjectCard = ({project}:{project:TProject}) => {
  const techStackRef = useRef<HTMLDivElement>(null);

  // Scroll handler for tech stack slider
  const scrollTechStack = (direction: "left" | "right") => {
    if (techStackRef.current) {
      const scrollAmount = 120; // Adjust scroll amount
      techStackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="group rounded-xl overflow-hidden shadow-md transition transform hover:scale-[1.03] hover:shadow-lg bg-white dark:bg-gray-900 flex flex-col p-4">
      {/* Image */}
      <div className="w-full h-52 overflow-hidden rounded-lg">
        <Image
          src={project?.image}
          alt={project?.title}
          width={400}
          height={250}
          className="w-full h-full object-cover hover:scale-[1.1] transition-transform duration-300"
        />
      </div>

      {/* Title & Links */}
      <div className="flex items-center justify-between mt-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {project?.title}
        </h3>
        <div className="flex items-center gap-3">
          <a href={project?.githubLink} target="_blank" className="hover:scale-[1.15] transition-all duration-300">
            <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" />
          </a>
          <a href={project?.liveLink} target="_blank" className="hover:scale-[1.15] transition-all duration-300">
            <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm my-5 leading-6 ">
        {truncateText(project?.description, 130)}{" "}
        <Link
          href={`/projects/${project?._id}`}
          className="text-cyan-500 font-semibold hover:underline"
        >
          ... See More
        </Link>
      </p>

      {/* Tech Stack Slider */}
      <div className="relative mt-3">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200  dark:bg-gray-800 p-1 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          onClick={() => scrollTechStack("left")}
        >
          <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>

        <div
          ref={techStackRef}
          className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth px-6"
        >
          {project?.techStack?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-800 p-1 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          onClick={() => scrollTechStack("right")}
        >
          <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
