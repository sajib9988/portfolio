/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { blogService } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
    await blogService.createBlog(req.body);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Blog create successfully',
      statusCode: StatusCodes.OK,
    });
  });
  const getSingleBlog = catchAsync(async (req, res) => {
    const blogId=req.params.id;
    const result=await blogService.getSingleBlog(blogId);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Blog retrieve successfully',
      statusCode: StatusCodes.OK,
      data:result
    });
  });
  const getallBlog = catchAsync(async (req, res) => {
    const email = req?.query;
    const result=await blogService.getAllBlog(email as any);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'all blog get successfully',
      statusCode: StatusCodes.OK,
      data: result.result,
      meta:result.meta
    });
  });
  const updateBlog = catchAsync(async (req, res) => {
    const blogId=req.params.id;
    const data= req.body;
    const result=await blogService.updateBlog(blogId,data);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'update blog  successfully',
      statusCode: StatusCodes.OK,
      data:result
    });
  });
  const deleteBlog = catchAsync(async (req, res) => {
    const blogId=req.params.id;
    const result=await blogService.deleteBlog(blogId);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Blog delete  successfully',
      statusCode: StatusCodes.OK,
      data:result
    });
  });

  export const blogController={
    createBlog,
    getSingleBlog,
    getallBlog,
    updateBlog,
    deleteBlog
  }