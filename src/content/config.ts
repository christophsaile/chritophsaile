import { defineCollection, reference, z } from 'astro:content';

const intro = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    projects: z.array(reference('projects')),
  }),
});

export const collections = { intro };
