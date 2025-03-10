import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { projectValidation } from "./project.validation";
import { projectController } from "./project.controller";



const projectRoutes = Router();
projectRoutes.post('/',validateRequest(projectValidation.projectValidationSchema),projectController.createProject)
projectRoutes.patch('/:id',validateRequest(projectValidation.projectUpdateValidationSchema),projectController.updateProject)
projectRoutes.get('/:id',projectController.getSingleProject)
projectRoutes.get('/',projectController.getAllProject)
projectRoutes.delete('/:id',projectController.deleteProject)


export default projectRoutes;