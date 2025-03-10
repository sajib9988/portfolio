import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogValidation } from "./blog.validation";
import { blogController } from "./blog.controller";

const blogRoutes = Router();
blogRoutes.post('/',validateRequest(blogValidation.blogValidationSchema),blogController.createBlog)
blogRoutes.patch('/:id',validateRequest(blogValidation.blogUpdateValidationSchema),blogController.updateBlog)
blogRoutes.get('/',blogController.getallBlog)
blogRoutes.get('/:id',blogController.getSingleBlog)
blogRoutes.delete('/:id',blogController.deleteBlog)


export default blogRoutes;