import { z, defineCollection } from "astro:content";

const notesCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean().default(true),
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()).default([]),
    // In frontmatter, dates written without quotes around them are interpreted as Date objects
    // publishDate: z.date(),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  notes: notesCollection,
};
