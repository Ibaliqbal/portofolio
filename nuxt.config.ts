// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/icon", "@nuxt/fonts"],
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
        weights: [400, 600],
      },
      {
        name: "Sora",
        provider: "google",
        weights: [600],
      },
      {
        name: "DM Sans",
        provider: "google",
        weights: [400, 700],
      },
      {
        name: "Outfit",
        provider: "google",
        weights: [400, 600],
      },
      {
        name: "Urbanist",
        provider: "google",
        weights: [400, 600],
      },
      {
        name: "Lexend",
        provider: "google",
        weights: [400, 600],
      },
      {
        name: "General Sans",
        provider: "google",
        weights: [400, 600],
      },
      {
        name: "Cabinet Grotesk",
        provider: "google",
        weights: [500, 700],
      },
    ],
  },
});
