import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/services" }),
  schema: z.object({
  }),
});

export const collections = { services };