import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://innova-webdev.com",
  integrations: [tailwind(), icon()],
  server: {
    host: '0.0.0.0', // Asegúrate de que el servidor escuche en todas las interfaces
    port: 10000
  }
});