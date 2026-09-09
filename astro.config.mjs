import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://lowrezstudio.com",
	integrations: [
		sitemap({
			changefreq: "weekly",
			priority: 1,
			lastmod: new Date(),
			serialize: (item) => ({
				...item,
				changefreq: "weekly",
				priority: 1,
				lastmod: new Date().toISOString(),
			}),
		}),
	],
});
