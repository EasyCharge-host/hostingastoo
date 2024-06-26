import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [
    react({
      include: ['**/react/*'],
    }),,
    tailwind({
      nesting: true,
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});

