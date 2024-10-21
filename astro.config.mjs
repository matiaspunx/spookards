// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentLayer: true,
  },
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: vercel(),
  integrations: [tailwind()],
});