import { z } from 'zod';

const blogValidationSchema = z.object({
  body: z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
    userEmail: z.string(),
    date: z.string(),
    author: z.string(),
  }),
});

const blogUpdateValidationSchema = z.object({
    body: z.object({
      image: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      date: z.string().optional(),
      author: z.string().optional(),
    }),
  });

export const blogValidation = {
  blogValidationSchema,
  blogUpdateValidationSchema
};
