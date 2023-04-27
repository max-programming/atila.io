import rss from "@astrojs/rss";
import { fetchArticles } from "~/lib/db.server";

export async function get(ctx: Record<"site", string>) {
  const articles = await fetchArticles();
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "Atila's Writings",
    description:
      "In this feed you'll find articles and notes published by Atila Fassina",
    site: ctx.site,
    items: articles.map((article) => ({
      title: article.title || "",
      description: article.description || "",
      link: article.url || "",
      pubDate: new Date(article.published_at || ""),
      customData: `<language>en-us</language>`,
    })),
  });
}
