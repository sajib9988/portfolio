// "use client";
// import BlogCard from "@/components/blog/BlogCard ";
// import Link from "next/link";
// import { fadeTop, motionStep } from "../About/motion";
// import { motion } from "motion/react";



// export default function Blog() {
//   return (
//     <section className="mt-16  text-white h-auto container mx-auto">
//       <motion.div variants={fadeTop} {...motionStep} className="mb-16">
//         <div className="text-center mt-8 px-6">
//           <h3 className="text-4xl mb-10 font-semibold">
//             <span className="text-cyan-600 font-bold mr-2">5.</span>
//             <span className="text-black dark:text-white text-shadow">
//               Blog
//             </span>
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 px-2">
//             {blogs?.slice(0,3)?.map((blog) => (
//               <BlogCard key={blog._id} {...blog} />
//             ))}
//           </div>
//           <div className="flex justify-center mt-10">
//             <Link href="/blog">
//               <button className="px-3 py-2 text-lg font-semibold rounded-lg transition-all duration-300 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-105 hover:shadow-lg">
//                 All Blogs
//               </button>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
