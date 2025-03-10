/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/queryBuilder';
import { IBlog } from './blog.interface';
import Blog from './blog.model';

const createBlog = async (payload: IBlog): Promise<IBlog> => {
  const result = await Blog.create(payload);
  return result;
};
const getSingleBlog = async (blogId: string) => {
  const result = await Blog.findById(blogId);
  return result;
};
const getAllBlog = async ({email}:{email:any}) => {

  if(email){
    const searchableFields = ['title'];
    const blogQuery = new QueryBuilder(Blog.find(), {userEmail:email})
      .search(searchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();
      const result = await blogQuery.modelQuery;
      const meta = await blogQuery.countTotal();
      // console.log(result,meta,"test")
      return {
        meta,
        result,
      };

  }
  // const result = await Blog.find();
  const searchableFields = ['title'];
  const blogQuery = new QueryBuilder(Blog.find(), {})
    .search(searchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
    const result = await blogQuery.modelQuery;
    const meta = await blogQuery.countTotal();
    // console.log(result,meta,"test")
    return {
      meta,
      result,
    };
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

const updateBlog = async (id: string, data: Partial<IBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const blogService = {
  createBlog,
  getSingleBlog,
  getAllBlog,
  deleteBlog,
  updateBlog,
};
