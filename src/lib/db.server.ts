import { articleListSchema, talkListSchema } from "./schemas";

export const fetchArticles = async () => {
  const resp = await fetch("https://api.atila.io/writings");
  const records = await resp.json();

  return articleListSchema.parse(records);
};

export const fetchAppearances = async () => {
  const resp = await fetch("https://api.atila.io/talks");
  const records = await resp.json();

  return talkListSchema.parse(records);
};
