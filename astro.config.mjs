import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { fileURLToPath } from 'url';

export default defineConfig({
  site: "https://innova-webdev.com",
  integrations: [tailwind(), icon()],
  server: {
    host: '0.0.0.0',
    port: 10000
  },
  vite: {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
