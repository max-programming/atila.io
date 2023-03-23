import { articleListSchema, talkListSchema } from "./schemas";
import { XataClient } from "./xata.codegen";

const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });

export const fetchArticles = async () => {
  const { records } = await xata.db.articles
    .sort("published_at", "desc")
    .getPaginated({
      pagination: {
        size: 100,
      },
    });

  return articleListSchema.parse(records);
};

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
