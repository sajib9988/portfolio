import { z } from 'zod';

const messageValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    subject: z.string(),
    userEmail: z.string(),
    message: z.string(),
  }),
});

export const messageValidation = {
  messageValidationSchema,
};
