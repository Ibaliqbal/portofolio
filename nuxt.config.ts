// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/fonts", "lenis/nuxt"],
  css: ["@/assets/css/main.css"],
  fonts: {
    families: [
      {
        name: "Inter",
        provider: "google",
        weights: [400, 700],
      },
      {
        name: "Work Sans",
        provider: "google",
        weights: [400, 500, 600],
      },
      {
        name: "Sora",
        provider: "google",
        weights: [600],
      },
      {
        name: "PP Editorial",
        provider: "local",
        src: "/fonts/PPEditorialNew-Regular.otf",
        weights: [400, 600],
      },
      {
        name: "Canopee",
        provider: "local",
        src: "/fonts/Canopee-Regular.otf",
        weights: [400, 500, 600, 700],
      },
    ],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
