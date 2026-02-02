import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: image().optional(), 
    imageAlt: z.string().optional(),
    links: z.array(z.object({ name: z.string(), url: z.string() })).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const posts = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    links: z.array(z.object({ name: z.string(), url: z.string() })).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, posts };
