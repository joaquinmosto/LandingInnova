import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import robots from "@itsmatteomanf/astro-robots-txt";

export default defineConfig({
  site: "https://innova-webdev.com",

  integrations: [
    tailwind(),
    icon(),
    sitemap(),  
    robots({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: "/sitemap.xml",
    }),
  ],

  server: {
    host: "0.0.0.0",
    port: 10000,
  },
});
