import { model, Schema } from 'mongoose';
import { IProject } from './project.interface';


const blogSchema = new Schema<IProject>(
  {
    image: { type: String, trim: true, required: [true, 'Image is Required'] },
    title: { type: String, trim: true, required: [true, 'Title is Required'] },
    description: {
      type: String,
      trim: true,
      required: [true, 'Description is Required'],
    },
    techStack:{
      type: [String],
      required: [true, 'Tech Stack is Required'],
      default: [],
    },githubLink: { type: String, required: [true, 'GitHub Link is Required'] },
    liveLink: { type: String, required: [true, 'Live Link is Required'] },
    userEmail: { type: String, required: [true, 'User Email is Required'] },

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

const Project = model<IProject>('Project', blogSchema);
export default Project;
