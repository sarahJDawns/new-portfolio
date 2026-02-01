import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    cover: z.string().optional(),
    links: z.array(z.object({ name: z.string(), url: z.string() })).optional(),
    tags: z.array(z.string()).optional(),
  })
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
  })
});

export const collections = { projects, posts };
