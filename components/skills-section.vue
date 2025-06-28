<script setup>
const fields = [
  {
    name: "frontend",
    techstack: [
      {
        name: "html",
        image: "html.png",
      },
      {
        name: "css",
        image: "css.png",
      },
      {
        name: "javascript",
        image: "javascript.png",
      },
      {
        name: "typescript",
        image: "typescript.png",
      },
      {
        name: "react.js",
        image: "react.png",
      },
      {
        name: "next.js",
        image: "next.png",
      },
      {
        name: "vue.js",
        image: "vue.png",
      },
      {
        name: "nuxt.js",
        image: "nuxt.png",
      },
      {
        name: "astro.js",
        image: "astro.png",
      },
      {
        name: "shadcn/ui",
        image: "question.png",
      },
      {
        name: "gsap",
        image: "question.png",
      },
      {
        name: "framer motion",
        image: "question.png",
      },
      {
        name: "tailwindcss",
        image: "tailwind.png",
      },
    ],
  },
  {
    name: "backend & database",
    techstack: [
      {
        name: "go",
        image: "go.png",
      },
      {
        name: "supabase",
        image: "supabase.png",
      },
      {
        name: "firebase",
        image: "firebase.png",
      },
      {
        name: "postgresql",
        image: "postgresql.png",
      },
      {
        name: "drizzle orm",
        image: "drizzle.png",
      },
    ],
  },
  {
    name: "state management",
    techstack: [
      {
        name: "context api",
        image: "question.png",
      },
      {
        name: "tanstack query",
        image: "question.png",
      },
      {
        name: "redux",
        image: "redux.png",
      },
      {
        name: "pinia",
        image: "pinia.png",
      },
    ],
  },
  {
    name: "authentication",
    techstack: [
      {
        name: "better-auth",
        image: "question.png",
      },
      { name: "oauth", image: "question.png" },
    ],
  },
];

const selectedImage = ref("question.png");
</script>

<template>
  <section class="skills">
    <h1>what i can ?</h1>
    <div class="fields">
      <article v-for="field in fields" :key="field.name" class="field">
        <h2>{{ field.name }}</h2>
        <div class="techstack">
          <p
            v-for="stack in field.techstack"
            :key="stack.name"
            class="text-skill"
            @pointerenter="
              (e) => {
                selectedImage = stack.image;
              }
            "
          >
            • <span>{{ stack.name }}</span>
          </p>
        </div>
      </article>
    </div>
    <div class="logo-outer-container">
      <div class="logo-container">
        <NuxtImg
          v-if="selectedImage"
          :key="selectedImage"
          :src="`/skills/${selectedImage}`"
          alt="Logo"
          class="logo"
        />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.skills {
  padding-block: 1.5rem;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.field h2 {
  text-transform: uppercase;
  font-size: clamp(1.25rem, 2.5vw, 2em);
}

.skills h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-family: "Canopee";
}

.fields {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-block: 1.5rem;
}

.techstack {
  text-transform: uppercase;
  font-weight: 600;
  font-size: clamp(0.75rem, 2vw, 1.25em);
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.techstack p {
  cursor: pointer;
}

.logo-outer-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  z-index: -2;
  filter: blur(3px);
  padding: 1rem;
}

.logo-container {
  width: 100%;
  height: 100%;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5px;
}
</style>
