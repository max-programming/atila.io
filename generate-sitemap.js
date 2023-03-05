import { readdir, writeFile, readFile } from "fs/promises";
import { resolve } from "path";

const REGEX_PRERENDER = /const prerender = true/g;
const root = process.cwd();

async function isStaticRoute(fileName) {
  const contents = await readFile(resolve(root, "src", "pages", fileName));
  return REGEX_PRERENDER.test(contents);
}

(async () => {
  const files = await readdir(resolve(root, "src", "pages"));

  const dynamicRoutes = await Promise.all(
    files.map(async (pageFile) => {
      const isStatic = await isStaticRoute(pageFile);

      return !isStatic && `https://atila.io/${pageFile.replace(".astro", "")}`;
    })
  );

  await writeFile(
    `${root}/pages.codegen.json`,
    JSON.stringify(
      { pages: dynamicRoutes.filter((route) => Boolean(route)) },
      null,
      2
    ),
    "utf-8"
  );
})();
