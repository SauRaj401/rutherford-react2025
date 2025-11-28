import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const sitemap = new SitemapStream({ hostname: "https://rutherfordfinefoods.com.au" });

const pages = [
  "/",
  "/about",
  "/products",
  "/export",
  "/contact",
];

pages.forEach((page) => sitemap.write({ url: page }));
sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data.toString());
});
