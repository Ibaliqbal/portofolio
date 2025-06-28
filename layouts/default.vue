<script setup lang="ts">
useSeoMeta({
  // **Page Title:**
  // This is one of the most crucial SEO factors.
  // Make it unique, descriptive, and include relevant keywords.
  // Add your name for personal branding.
  title: "balsss.",

  // **Open Graph Title (ogTitle):**
  // The title that appears when your link is shared on social media (Facebook, LinkedIn, etc.).
  // Try to keep it consistent with your main title.
  ogTitle: "balsss.",

  // **Description:**
  // A brief summary of your page's content.
  // This often appears in Google search results below the title.
  // Make it engaging and include relevant keywords about yourself and your portfolio.
  description:
    "Explore Iqbal Muthahhary's portfolio, life journey, and exciting projects. Discover my work, experiences, and the story behind each achievement.",

  // **Open Graph Description (ogDescription):**
  // The description that appears when your link is shared on social media.
  // Keep it consistent with your general description.
  ogDescription:
    "Explore Iqbal Muthahhary's portfolio, life journey, and exciting projects. Discover my work, experiences, and the story behind each achievement.",

  // **Author:**
  // Important for attribution, especially for a portfolio.
  author: "Iqbal Muthahhary",

  // **Keywords (Optional, but can help for initial hints):**
  // While Google states meta keywords don't heavily influence ranking,
  // they can provide initial hints for bots or other SEO tools.
  // Use the most relevant keywords related to yourself and your expertise.
  keywords:
    "Iqbal Muthahhary, portfolio, web developer, graphic designer, life story, experience, projects, technology, IT, programmer, software engineer",

  // **Open Graph Image (ogImage):**
  // The image that will appear when your link is shared on social media.
  // This is crucial for visual appeal. Use a professional photo of yourself or
  // an image representing your portfolio.
  ogImage: "https://www.iqbalmuthahhary.com/images/profile-banner.png", // Replace with your OG image URL

  // **Open Graph Type (ogType):**
  // Describes the type of content on your page. For a personal portfolio, 'profile' or 'website' can be used.
  ogType: "profile", // Or 'website' if more general

  // **Twitter Card (for Twitter):**
  // Similar to Open Graph, but specifically for Twitter.
  twitterCard: "summary_large_image", // Displays a large image
  twitterSite: "@your_twitter_handle", // Replace with your Twitter handle (if any)
  twitterCreator: "@your_twitter_handle", // Replace with your Twitter handle (if any)
});
</script>

<template>
  <main class="default-layout">
    <MainNavbar />
    <main>
      <slot />
    </main>
    <MainFooter />
    <MagnetCursor />
  </main>
</template>

<style lang="css" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.default-layout main {
  flex-grow: 1;
}
</style>
