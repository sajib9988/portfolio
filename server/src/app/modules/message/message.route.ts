import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { messageValidation } from "./message.validation";
import { messageController } from "./message.controller";



const messageRoutes = Router();
messageRoutes.post('/',validateRequest(messageValidation.messageValidationSchema),messageController.createMessage)
messageRoutes.get('/',messageController.getallMessage)



export default messageRoutes;