import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    links: z.array(z.object({ name: z.string(), url: z.string() })).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    links: z.array(z.object({ name: z.string(), url: z.string() })).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, posts };
