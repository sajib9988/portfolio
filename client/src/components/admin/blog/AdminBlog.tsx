"use client";
import { useState } from "react";
import AdminBlogCard from "./AdminBlogCard";
import AddBlogPost from "./AddBlogPost";
import { TBlog } from "@/types/globalTypes";
import { TUserSession } from "@/types/session.user.type";

const AdminBlog = ({ blogs,session }: { blogs: TBlog[],session:TUserSession }) => {
  const [search, setSearch] = useState("");
  const filteredBlogs = blogs?.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto overflow-auto lg:min-w-[900px] px-2 p-6">
      <div className="px-2  my-5">
        <h3 className="text-center md:text-4xl text-2xl font-bold my-2">
          Manage Blog
        </h3>
        <div className="flex justify-between items-center">
          <input
            className="p-2 my-3 border-black border-2 text-black rounded-md dark:text-white"
            type="text"
            placeholder="Search title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AddBlogPost  session={session}/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredBlogs.length > 0 &&
          filteredBlogs?.map((blog, index: number) => (
            <AdminBlogCard blog={blog} key={index} />
          ))}
      </div>
      {
        filteredBlogs.length === 0 && (
          <div className="text-center text-2xl  grid place-items-center h-[30vh] font-bold">
            <p>No blog found</p>
          </div>
        )
      }
    </div>
  );
};

export default AdminBlog;
