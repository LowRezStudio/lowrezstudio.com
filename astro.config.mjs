import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://lowrezstudio.com",
	integrations: [sitemap()],
});
