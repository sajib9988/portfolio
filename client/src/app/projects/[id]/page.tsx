import ProjectDetails from '@/components/project/ProjectDetails';
import { IParamsProps, TProject } from '@/types/globalTypes';
import React from 'react';
interface IProps {
    params: Promise<{
      id: string;
    }>;
  }
export async function generateMetadata({ params }: IProps) {
    const id = (await params)?.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    const project: TProject = data?.data;
  
    return {
      title: project?.title,
      description: project?.description,
    };
  }
const DynamicProjectDetailsPage = async({params}:IParamsProps) => {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
        next: { tags: ["projects"] },
      });
      const data = await res.json();
      const project = data?.data;
    return (
        <div>
            <ProjectDetails project={project as TProject}/>
        </div>
    );
};

export default DynamicProjectDetailsPage;