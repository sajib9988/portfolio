// import BlogDetails from '@/components/blog/BlogDetails';
import BlogDetails from '@/components/blog/BlogDetails';
import { TBlog } from '@/types/globalTypes';
import React from 'react';
interface IProps {
    params: Promise<{
      id: string;
    }>;
  }
  export async function generateMetadata({ params }: IProps) {
    const id = (await params)?.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    const project: TBlog = data?.data;
  
    return {
      title: project?.title,
      description: project?.description,
    };
  }
const DynamicBlogDetailsPage = async({params}:IProps) => {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`, {
        next: { tags: ["blogs"] },
      });
      const data = await res.json();
      const blog = data?.data;
    return (
        <div>
           <BlogDetails blog={blog}/>

        </div>
    );
};

export default DynamicBlogDetailsPage;