"use client";
import BlogCard from "@/components/blog/BlogCard ";
import { fadeTop, motionStep } from "../About/motion";
import { motion } from "motion/react";
import { TBlog } from "@/types/globalTypes";

export default function AllBlog({
  blogs,
  limit,
  home,
}: {
  blogs: TBlog[];
  limit?: number;
  home?: boolean;
}) {
  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;
  return (
    <section className="mt-16  text-white h-auto container mx-auto">
      <motion.div variants={fadeTop} {...motionStep} className="mb-16">
        <div className="text-center mt-8 px-6">
          {home ? (
            <h3 className="text-4xl mb-10 font-semibold">
              <span className="text-cyan-600 font-bold mr-2">5.</span>
              <span className="text-black dark:text-white text-shadow">
                Blogs
              </span>
            </h3>
          ) : (
            <h3 className="text-4xl mb-10 font-semibold">
              <span className="text-black dark:text-white text-shadow">
                Blog
              </span>
            </h3>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 px-2">
            {displayedBlogs?.map((blog) => (
              <BlogCard key={blog._id} blog={blog as TBlog} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
