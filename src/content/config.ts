import { defineCollection } from "astro:content";

const notesCollection = defineCollection({});

export const collections = {
  notes: notesCollection,
};
