import { TBlog } from "@/types/globalTypes";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({blog}:{blog: TBlog  }) => {
  return (
    <div className="p-4 border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="w-full h-52 overflow-hidden rounded-lg">
              <Image
                src={blog?.image}
                alt={blog?.title}
                width={400}
                height={250}
                className="w-full h-full object-cover hover:scale-[1.1] transition-transform duration-300"
              />
            </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{blog?.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{blog?.description}</p>
        <div className="mt-4">
          <Link href={`/blog/${blog?._id}`}>
            <button className="text-cyan-500 dark:text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-700 transition-all duration-300">
              See More →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
