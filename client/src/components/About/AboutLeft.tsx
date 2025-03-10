'use client'
import { motion } from "motion/react"
import { fadeTop, motionStep } from "./motion";
import { IoCaretForwardOutline } from "react-icons/io5"; // Import Ionicons

function AboutLeft() {
  const skills = [
    "Javascript",
    "React js",
    "Next js",
    "Redux",
    "TypeScript",
    "Tailwind CSS",
    "Daisy UI",
    "ShadCn",
    "Node js",
    "Express js",
    "MongoDB",
    "Mongoose",
    "GraphQL",
    "NextAuth.js",
    "Graph API",
    "Socket.io",
  
  ];

  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4  text-slate-400">
        <p>
          Hello! My name is Sajib Biswas and I enjoy creating things that live
          on the internet. My interest in web development started back in 2021
          when I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>

        <p>Here are a few technologies I’ve been working with recently:</p>

        <div className="">
          <ul className="grid grid-cols-2 gap-2">
            {skills.map((e, i) => (
              <li
                key={i}
                className="flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400"
              >
                <IoCaretForwardOutline className="text-sky-400" />
                <span className="ml-2">{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutLeft;
