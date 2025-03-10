import { z } from 'zod';

const projectValidationSchema = z.object({
  body: z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    liveLink: z.string(),
    githubLink: z.string(),
    userEmail: z.string(),
    
  }),
});

const projectUpdateValidationSchema = z.object({
  body: z.object({
    image: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    techStack: z.array(z.string()).optional(),
    liveLink: z.string().optional(),
    githubLink: z.string().optional(),
  }),
});

export const projectValidation = {
  projectValidationSchema,
  projectUpdateValidationSchema,
};
