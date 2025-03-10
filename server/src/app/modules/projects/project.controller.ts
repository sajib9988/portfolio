/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import { projectService } from './project.service';

const createProject = catchAsync(async (req, res) => {
  await projectService.createProject(req.body);
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Project create successfully',
    statusCode: StatusCodes.OK,
  });
});
const getSingleProject = catchAsync(async (req, res) => {
  const blogId = req.params.id;
  const result = await projectService.getSingleProject(blogId);
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Project retrieve successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
const getAllProject = catchAsync(async (req, res) => {
  const email = req?.query;
  const result = await projectService.getAllProject(email as any);
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Project retrieve successfully',
    statusCode: StatusCodes.OK,
    data: result.result,
    meta: result.meta,
  });
});
const updateProject = catchAsync(async (req, res) => {
  const projectId = req.params.id;
  const data = req.body;
  const result = await projectService.updateProject(projectId, data);
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Project retrieve successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
const deleteProject = catchAsync(async (req, res) => {
  const projectId = req.params.id;
  await projectService.deleteProject(projectId);
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Project delete successfully',
    statusCode: StatusCodes.OK,
    data: null,
  });
});

export const projectController = {
  createProject,
  getSingleProject,
  getAllProject,
  updateProject,
  deleteProject,
};
