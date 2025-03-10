"use client";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import AdminBlogDetails from "./AdminBlogDetails";
import EditBlogDetails from "./EditBlogDetails";
import { TBlog } from "@/types/globalTypes";
import { toast } from "sonner";
import { sonarId } from "@/utils/sonarId";
import { revalidateBlogs } from "@/actions/revalidationData";

const AdminBlogCard = ({ blog }: { blog: Record<string, unknown> }) => {
  const handleDelete = async(id: string) => {
    toast.loading("Deleting Blog...",{id:sonarId});

    try {
      // Send DELETE request to API
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      await revalidateBlogs();

      toast.success("Blog deleted successfully!", { id: sonarId });
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete the blog. Please try again.", { id: sonarId });
    }
  };
  
  return (
    <div className="p-4 border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl relative">
      {/* Image with admin controls */}
      <div className="w-full h-52 overflow-hidden rounded-lg relative">
        <Image
          src={blog?.image as string}
          alt={blog?.title as string}
          width={400}
          height={250}
          className="w-full h-full object-cover hover:scale-[1.1] transition-transform duration-300"
        />

        {/* Show edit & delete buttons if admin */}
        <div className="absolute top-2 right-2 flex gap-2">
          {/* Edit Button */}
          <span className="bg-cyan-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer flex items-center gap-2">
            <EditBlogDetails blog={blog} />
  
          </span>

          {/* Delete Button */}
          <span
            onClick={() => handleDelete(blog?._id as string)}
            className="bg-red-500 text-white  p-2 rounded-md shadow-md hover:bg-red-600 transition-colors duration-300 cursor-pointer flex items-center gap-2"
          >
            <MdDelete className="w-7 h-7"/>
           
          </span>
        </div>
      </div>

      {/* Blog details */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {blog?.title as string}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {blog?.description as string}
        </p>
        <div className="mt-4">
          <AdminBlogDetails blog={blog as TBlog} />
        </div>
      </div>
    </div>
  );
};

export default AdminBlogCard;
