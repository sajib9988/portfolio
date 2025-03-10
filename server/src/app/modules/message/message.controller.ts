/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from "http-status-codes";
import { messageService } from "./message.service";
import catchAsync from "../../utils/catchAsync";

const getallMessage = catchAsync(async (req, res) => {
    const email = req?.query;
    const result=await messageService.getAllMessage(email as any);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'get all message successfully',
      statusCode: StatusCodes.OK,
      data: result.result,
      meta:result.meta
    });
  });
  const createMessage = catchAsync(async (req, res) => {
    await messageService.createMessage(req.body);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Blog create successfully',
      statusCode: StatusCodes.OK,
    });
  });
  export const messageController={
    getallMessage,
    createMessage
  }