import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { TBlog } from "@/types/globalTypes";
import Image from "next/image";



const AdminBlogDetails = ({ blog }:{blog:TBlog}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-cyan-500 dark:text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-700 transition-all duration-300">
          See More →
        </button>
      </DialogTrigger>
      <DialogContent>
        {/* Accessibility Title */}
        <DialogTitle>{blog?.title}</DialogTitle>

        <div className="container mx-auto max-h-[70vh] overflow-auto p-6">
          {/* Blog Image */}
          {blog?.image && (
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
            {blog?.title}
          </h1>

          {/* Meta Info */}
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            By <span className="font-semibold">{blog?.author}</span> • {blog?.date}
          </p>

          {/* Blog Content */}
          <div className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {blog?.description?.split("\n")?.map((para: string, index: number) => (
              <p key={index} className="mb-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminBlogDetails;
