import QueryBuilder from "../../builder/queryBuilder";
import { IProject } from "./project.interface";
import Project from "./project.model";


const createProject = async (payload: IProject): Promise<IProject> => {
  const result = await Project.create(payload);
  return result;
};
const getSingleProject = async (blogId: string) => {
  const result = await Project.findById( blogId );
  return result;
};
const getAllProject = async ({email}:{email:string | undefined }) => {
 
  if(email){
    const searchableFields = ['title'];
    const projectQuery = new QueryBuilder(Project.find(), {userEmail:email})
      .search(searchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();
      const result = await projectQuery.modelQuery;
      const meta = await projectQuery.countTotal();
      // console.log(result,meta,"test")
      return {
        meta,
        result,
      };

  }
  
  const searchableFields = ['title'];
    const projectQuery = new QueryBuilder(Project.find(), {})
      .search(searchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();
      const result = await projectQuery.modelQuery;
      const meta = await projectQuery.countTotal();
      // console.log(result,meta,"test")
      return {
        meta,
        result,
      };
};

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

const updateProject = async (id: string, data: Partial<IProject>) => {
  const result = await Project.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const projectService = {
  createProject,
  getSingleProject,
  getAllProject,
  deleteProject,
  updateProject,
};
