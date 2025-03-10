import { model, Schema } from 'mongoose';
import { IMessage } from './message.interface';


const messageSchema = new Schema<IMessage>(
  {
    name: { type: String, trim: true, required: [true, 'name is Required'] },
    subject: { type: String, trim: true, required: [true, 'subject is Required'] },
    userEmail: { type: String, trim: true, required: [true, 'userEmail is Required'] },
    message: { type: String, trim: true, required: [true, 'message is Required'] },
  },
  {
    // it automatic add two field 1.updatedAt 2.createdAt
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        // Exclude the __v field
        delete ret.__v;
      },
    },
  },
);

const Message = model<IMessage>('Message', messageSchema);
export default Message;
