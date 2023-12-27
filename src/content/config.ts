import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    created: z.coerce.date(),
  }),
});

export const collections = {
  blog: blogCollection,
};
