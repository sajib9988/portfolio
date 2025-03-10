import { TBlog } from "@/types/globalTypes";
import Image from "next/image";
import Link from "next/link";



export default function BlogDetails({blog}:{blog:TBlog}) {
  return (
    <div className="container mx-auto max-w-3xl p-6 min-h-[80vh] grid place-item-center">
      {/* Back Button */}
      <div className="mb-4">
        <Link href="/blog">
          <button className="text-cyan-500 dark:text-cyan-400 hover:underline flex items-center">
            ← Back to Blog
          </button>
        </Link>
      </div>

      {/* Blog Image */}
      <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
        <Image
          src={blog?.image}
          alt={blog?.title}
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">{blog?.title}</h1>

      {/* Meta Info */}
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
        By <span className="font-semibold">{blog?.author}</span> • {blog?.date}
      </p>

      {/* Blog Content */}
      <div className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        {blog?.description?.split("\n")?.map((para, index) => (
          <p key={index} className="mb-4">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
