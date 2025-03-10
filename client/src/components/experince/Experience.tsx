/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import "react-vertical-timeline-component/style.min.css";
import { fadeTop } from "../About/motion";

// Import icons from react-icons
import { FaReact,  FaRobot } from "react-icons/fa";

// Fix Next.js SSR issue
const VerticalTimeline = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimeline),
  { ssr: false }
);

const VerticalTimelineElement = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimelineElement),
  { ssr: false }
);

// Experience Data
const experiences = [
  {
    title: "React.js & Next.js Developer",
    company_name: "Freelancer (2023)",
    icon: <FaReact size={30} />,
    iconBg: "#61DAFB", // React Blue
    date: "2023",
    points: [
      "Developed interactive web applications using React.js and Next.js.",
      "Integrated APIs for dynamic content loading and real-time features.",
      "Utilized server-side rendering (SSR) and static site generation (SSG) for SEO optimization.",
      "Focused on performance improvements and code splitting for faster load times.",
    ],
  },
  {
    title: "Full-Stack Developer on Fiverr",
    company_name: "Freelancer (2024)",
    icon: <FaRobot size={30} />,
    iconBg: "#10B981", // Green for AI
    date: "2024",
    points: [
      "Developing full-stack applications using modern technologies.",
      "Working on both frontend and backend with frameworks like Next.js and Node.js.",
      "Integrating third-party APIs and working with databases like MongoDB.",
      "Building custom solutions for clients and optimizing the development workflow.",
    ],
  },
];


const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #10b981" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={experience.icon}
    >
      <div>
        <h3 className="text-white text-lg font-bold">{experience.title}</h3>
        <p className="text-gray-400 text-sm font-semibold mt-1">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience?.points?.map((point: string, index: number) => (
          <li key={index} className="text-gray-300 text-sm tracking-wide">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className="py-16 bg-gray-900 transition-colors duration-300">
      <motion.div variants={fadeTop} initial="hidden" animate="visible">
      <h3 className="text-4xl text-center mb-10 font-semibold">
            <span className="text-cyan-600 font-bold mr-2">2.</span>
            <span className="text-white text-shadow">Work Experience</span>
          </h3>
      </motion.div>

      <div className="mt-16">
        <VerticalTimeline className="custom-vertical-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
