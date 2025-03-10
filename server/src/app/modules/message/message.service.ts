/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from "../../builder/queryBuilder";
import { IMessage } from "./message.interface";
import Message from "./message.model";

const getAllMessage = async ({email}:{email:any}) => {

    if(email){
      const searchableFields = ['name'];
      const messageQuery = new QueryBuilder(Message.find(), {userEmail:email})
        .search(searchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
        const result = await messageQuery.modelQuery;
        const meta = await messageQuery.countTotal();
        // console.log(result,meta,"test")
        return {
          meta,
          result,
        };
  
    }
    // const result = await Blog.find();
    const searchableFields = ['title'];
    const messageQuery = new QueryBuilder(Message.find(), {})
      .search(searchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();
      const result = await messageQuery.modelQuery;
      const meta = await messageQuery.countTotal();
      // console.log(result,meta,"test")
      return {
        meta,
        result,
      };
  };

  const createMessage = async (payload: IMessage) => {
    const result = await Message.create(payload);
    return result;
  };

  export const messageService={
    getAllMessage,
    createMessage
  }