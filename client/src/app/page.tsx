// import About from "@/components/About/About";
import About from "@/components/About/About";
import AllBlog from "@/components/blog/AllBlog";
// import AboutLeft from "@/components/About/AboutLeft";

import Education from "@/components/education/Education";
import Experience from "@/components/experince/Experience";
import Hero from "@/components/hero/Hero";
import AllProject from "@/components/project/AllProject";
import { TProject } from "@/types/globalTypes";
import Link from "next/link";

export default async function Home() {
  const projectTes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
    next: { revalidate: 30 },
  });
  const projectData = await projectTes.json();
  
  const blogRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    next: { revalidate: 30 },
  });

  const blogData = await blogRes.json();

  // console.log("Data: ", data);
  const projects = projectData?.data;
  const blogs = blogData?.data;
  // console.log(blogs,"all blogs")
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      {/* <AboutLeft/> */}
      <div className="py-8">
        <AllProject projects={projects as TProject[]} limit={3} home={true}/>
        <div className="flex justify-center my-10">
          <Link href="/projects">
            <button className="px-3 py-2 text-lg font-semibold rounded-lg transition-all duration-300 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-105 hover:shadow-lg">
              All Projects
            </button>
          </Link>
        </div>
      </div>
      <Education />
      <div className="pb-8">
        <AllBlog blogs={blogs} limit={3} home={true}/>
        <div className="flex justify-center my-10">
          <Link href="/blog">
            <button className="px-3 py-2 text-lg font-semibold rounded-lg transition-all duration-300 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-105 hover:shadow-lg">
              All Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
