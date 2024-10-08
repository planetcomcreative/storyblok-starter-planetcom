import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import basicSsl from '@vitejs/plugin-basic-ssl'
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: env.STORYBLOK_IS_PREVIEW === "yes",
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        contactInfo: "storyblok/ContactInfo",
        hero: "storyblok/Hero",
        config: "storyblok/Config",
        "popular-articles": "storyblok/PopularArticles",
        "all-articles": "storyblok/AllArticles",
        article: "storyblok/Article",
      },
      apiOptions: {
        region: "ca",
      },
    }),
    tailwind(),],
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true,
      },
    },

});
