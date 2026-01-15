// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import compressor from "astro-compressor";

import purgecss from "astro-purgecss";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": "/src/components",
        "@utils": "/src/utils",
        "@layouts": "/src/layouts",
        "@lib": "/src/lib",
        "@interfaces": "/interfaces",
      },
    },
  },
  site: "https://cenakin.cl",
  integrations: [
    compressor({ gzip: true, brotli: false }),
    purgecss(),
    sitemap(),
  ],
});
