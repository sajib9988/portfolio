// "use client";
// import ProjectCard from "./ProjectCard";
// import Link from "next/link";
// import { motion } from "motion/react";
// import { fadeTop, motionStep } from "../About/motion";
// const projects = [
//   {
//     _id: "1",
//     title: "E-Commerce Website",
//     description:
//       "A full-stack e-commerce platform with authentication and payment integration. asdfa with authentication and payment integration. asdfa with authentication and payment integration. asdfa fsafs fasdffffffffffsafsafsdf fasd",
//     image:
//       "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
//     link: "/projects/ecommerce",
//     techStack: ["Next.js", "Tailwind", "Stripe"],
//     liveLink: "http://localhost:3000/",
//     githubLink: "github.com",
//   },
//   {
//     _id: "2",
//     title: "Portfolio Website",
//     description:
//       "A high-performance personal portfolio with dark/light mode A full-stack e-commerce platform with authentication and payment integration. asdfa with authentication and payment integration. asdfa with authentication and payment integration. asdfa fsafs fasdffffffffffsafsafsdf fasd.",
//     image:
//       "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
//     link: "/projects/portfolio",
//     techStack: ["React", "Tailwind", "Next.js"],
//     liveLink: "http://localhost:3000/",
//     githubLink: "github.com",
//   },
//   {
//     _id: "3",
//     title: "Blog Platform",
//     description:
//       "A modern blog platform with markdown support and dynamic routing.A full-stack e-commerce platform with authentication and payment integration. asdfa with authentication and payment integration. asdfa with authentication and payment integration. asdfa fsafs fasdffffffffffsafsafsdf fasd",
//     image:
//       "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
//     link: "/projects/blog",
//     techStack: [
//       "Next.js",
//       "Tailwind",
//       "Sanity.io",
//       "Next.js",
//       "Tailwind",
//       "Sanity.io",
//       "Next.js",
//       "Tailwind",
//       "Sanity.io",
//     ],
//     liveLink: "http://localhost:3000/",
//     githubLink: "github.com",
//   },
//   {
//     _id: "4",
//     title: "Blog Platform",
//     description:
//       "A modern blog platform with markdown support and dynamic routing.A full-stack e-commerce platform with authentication and payment integration. asdfa with authentication and payment integration. asdfa with authentication and payment integration. asdfa fsafs fasdffffffffffsafsafsdf fasd",
//     image:
//       "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
//     link: "/projects/blog",
//     techStack: [
//       "Next.js",
//       "Tailwind",
//       "Sanity.io",
//       "Next.js",
//       "Tailwind",
//       "Sanity.io",
//       "Next.js",
//       "Tailwind",
//       "Sanity.io",
//     ],
//     liveLink: "http://localhost:3000/",
//     githubLink: "github.com",
//   },
// ];

// export default function Project() {
//   return (
//     <section className="px-6 container mx-auto mt-16">
//       <motion.div variants={fadeTop} {...motionStep} className="mb-16">
//         {/* Section Title */}
//         <h3 className="text-4xl text-center mb-10 font-semibold">
//           <span className="text-cyan-600 font-bold mr-2">3.</span>
//           <span className="text-black dark:text-white text-shadow">
//             {" "}
//             My Projects
//           </span>
//         </h3>

//         {/* Project Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 px-2">
//           {projects?.slice(0, 3)?.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>

//         {/* Centered Button for "All Projects" */}
//         <div className="flex justify-center mt-10">
//           <Link href="/projects">
//             <button className="px-3 py-2 text-lg font-semibold rounded-lg transition-all duration-300 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-105 hover:shadow-lg">
//               All Projects
//             </button>
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
