/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import "react-vertical-timeline-component/style.min.css";
import { fadeTop } from "../About/motion";

// Import icons from react-icons
import { FaGraduationCap } from "react-icons/fa";

// Fix Next.js SSR issue
const VerticalTimeline = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimeline),
  { ssr: false }
);

const VerticalTimelineElement = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimelineElement),
  { ssr: false }
);

// Education Data
const education = [
  {
    title: "Bachelor of Computer Science and Engineering",
    institute: "DUET",
    major: "Software Engineering",
    date: "2017",
    result: "CGPA 2.38 (Out of 4.00)",
    icon: <FaGraduationCap size={30} />,
    iconBg: "#1D4ED8", // Cyan-600
  },
  {
    title: "Higher Secondary School Certificate",
    institute: "Tongi Public College",
    group: "Science",
    date: "2013",
    result: "GPA 3.38 (Out of 5.00)",
    icon: <FaGraduationCap size={30} />,
    iconBg: "#10B981", // Green for Education
  },
  {
    title: "Secondary School Certificate",
    institute: "Asraf Textile High School",
    group: "Science",
    date: "2007",
    result: "GPA 4.91 (Out of 5.00)",
    icon: <FaGraduationCap size={30} />,
    iconBg: "#F59E0B", // Yellow for Education
  },
];

const EducationCard = ({ education }: { education: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #10b981" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={education.icon}
    >
      <div>
        <h3 className="text-white text-lg font-bold">{education.title}</h3>
        <p className="text-gray-400 text-sm font-semibold mt-1">{education.institute}</p>
        <p className="text-gray-400 text-sm font-semibold mt-1">{education.major || education.group}</p>
        <p className="text-gray-300 text-sm mt-2">{education.result}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <section className="py-16 bg-gray-900 transition-colors duration-300">
      <motion.div variants={fadeTop} initial="hidden" animate="visible">
        <h3 className="text-4xl text-center mb-10 font-semibold">
          <span className="text-cyan-600 font-bold mr-2">4.</span>
          <span className="text-white text-shadow">Education</span>
        </h3>
      </motion.div>

      <div className="mt-16">
        <VerticalTimeline className="custom-vertical-timeline">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
