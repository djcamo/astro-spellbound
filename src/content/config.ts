import { z, defineCollection } from 'astro:content';

const healers = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    mode: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
  }),
});

const readers = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
  }),
});
export const collections = {readers, healers};