import { z } from 'zod';

const createAnimalSchema = z.object({
  body: z.object({
    description: z.string(),
    image: z.array(z.string()),
    user: z.string(),
    category: z.string(),
    tips: z.array(z.string()),
  }),
});

const updateAnimalSchema = z.object({
  body: z.object({
    description: z.string().optional(),
    image: z.array(z.string()).optional(),
    tips: z.array(z.string()).optional(),
  }),
});

export const animalValidations = {
  createAnimalSchema,
  updateAnimalSchema,
};
