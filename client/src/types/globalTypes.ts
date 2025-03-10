export type TBlog = {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: string;
    date: string;
    userEmail: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type TProject = {
    _id: string;
    image: string;
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
    liveLink: string;
    userEmail: string;
  };
  

export  interface IParamsProps {
    params: Promise<{
      id: string;
    }>;}