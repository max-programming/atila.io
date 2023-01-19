import { XataClient } from "./xata.codegen";

const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });

export const fetchNow = async () => {
  const nowRecords = await xata.db.now.sort("id", "asc").getMany();

  return nowRecords;
};

export const fetchArticles = async () => {
  const articlesRecords = await xata.db.articles
    .sort("published_at", "desc")
    .getMany();

  return articlesRecords;
};

export const fetchAppearances = async () => {
  const appearancesRecords = await xata.db.appearances
    .sort("date", "desc")
    .getMany();

  return appearancesRecords;
};
