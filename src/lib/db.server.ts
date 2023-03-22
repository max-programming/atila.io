import { XataClient } from "./xata.codegen";
import { z } from "zod";

const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });

export const fetchArticles = async () => {
  const articlesRecords = await xata.db.articles
    .sort("published_at", "desc")
    .getMany();

  return articlesRecords;
};

export const talkTypesSchema = z
  .union([
    z.literal("workshop"),
    z.literal("conference"),
    z.literal("meetup"),
    z.literal("podcast"),
  ])
  .optional();

export const talkListSchema = z.array(
  z.object({
    id: z.string(),
    date: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    recording: z.string().optional().nullable(),
    slides: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    type: talkTypesSchema,
    published: z.boolean().optional().nullable(),
    isFuture: z.boolean().optional().nullable(),
    place: z.string().optional().nullable(),
  })
);

export const fetchAppearances = async () => {
  const { records } = await xata.db.appearances
    .sort("date", "desc")
    .getPaginated({
      pagination: {
        size: 100,
      },
    });

  return talkListSchema.parse(records);
};
