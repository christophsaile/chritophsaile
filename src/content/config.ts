import { defineCollection, reference, z } from 'astro:content';

const introCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    projects: z.array(reference('projects')),
  }),
});

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string().optional(),
      cover: image(),
      coverMobile: image().optional(),
      description: z.string(),
      order: z.number(),
      year: z.number(),
    }),
});

export const collections = {
  intro: introCollection,
  projects: projectsCollection,
};
