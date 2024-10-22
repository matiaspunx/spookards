// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentLayer: true,
  },
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: vercel(),
  integrations: [tailwind()],
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"],
    },
    build: {
      cssMinify: "lightningcss",
      minify: true,
    },
  },
  image: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
    service: passthroughImageService(),
  },
});
