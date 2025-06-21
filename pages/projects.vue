<script setup>
import gsap from "gsap";

const projects = [
  {
    name: "SolvedThis",
    live: "https://solvedthis.vercel.app",
    github: "https://github.com/Ibaliqbal/SolvedThis",
    techstack: [
      "next.js",
      "drizzle orm",
      "postgresql",
      "tailwindcss",
      "better-auth",
    ],
    image: "/solvedthis.png",
    description:
      "SolvedThis is a modern discussion platform that empowers communities to engage in meaningful conversations. Built with cutting-edge technologies, it offers a seamless experience for creating, sharing, and engaging with content. SolvedThis promotes healthy discussions within a secure and user-friendly environment.",
  },
  {
    name: "Nike Landing Page",
    live: "https://nike-gsap-balss.vercel.app/",
    github: "https://github.com/Ibaliqbal/nike-gsap",
    techstack: ["next.js", "gsap", "lenis"],
    image: "/nike-landing-page.png",
    description:
      "This project is a modern landing page for the Nike brand, built using Next.js, GSAP, and Lenis. The landing page showcases Nike’s identity through smooth animations, fast performance, and a responsive layout. Next.js provides server-side rendering and optimized routing, GSAP brings interactive animations to life, and Lenis adds smooth scrolling effects for an elegant user experience. The design is clean, dynamic, and focused on delivering a high-end, branded feel.",
  },
  {
    name: "MClass",
    live: "",
    github: "https://github.com/Ibaliqbal/mclass",
    techstack: [
      "next.js",
      "tailwindcss",
      "drizzle orm",
      "supabase",
      "react query",
    ],
    image: "/mclass.png",
    description:
      "MClass is a comprehensive LMS platform that connects students and teachers. It provides features for joining classes, accessing course materials, submitting assignments, and managing classes. MCLASS streamlines the learning process and promotes engagement within a secure digital environment. It is designed to transform online and blended learning.",
  },
  {
    name: "Balmed",
    live: "",
    github: "https://github.com/Ibaliqbal/balmed-v2",
    techstack: [
      "next.js",
      "tailwindcss",
      "drizzle orm",
      "supabase",
      "react query",
      "framer motion",
    ],
    image: "/balmed.png",
    description:
      "Balmed is a cutting-edge social media application developed using Next.js 14, with React Query for efficient data fetching and Supabase as the database. This app is designed to provide users with an intuitive and responsive experience on the social media platform.",
  },
  {
    name: "Movie List",
    live: "",
    github: "https://github.com/Ibaliqbal/movie-astro",
    techstack: [
      "astro.js",
      "tailwindcss",
      "react.js",
      "supabase",
      "framer motion",
    ],
    image: "/movie-list.png",
    description:
      "This project is a Movie List web application built with Astro, React, Tailwind CSS, and Supabase. The app allows users to browse and manage a personalized list of movies. Astro handles fast static site generation, while React is used for interactive components. Tailwind CSS ensures a clean and responsive UI design. User authentication and data storage are managed by Supabase, enabling users to sign up, log in, and save their favorite movies securely.",
  },
];

const preload = usePreload();

function startAnimation() {
  const listProjects = document.querySelectorAll(".project");
  const tl = gsap.timeline();

  tl.fromTo(
    ".title-projects",
    {
      y: 20,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power4.inOut",
    }
  ).to(listProjects, {
    stagger: 0.05,
    duration: 0.75,
    opacity: 1,
    ease: "power3.inOut",
  });
}

onMounted(() => {
  if (preload.value.hasPlayed) {
    startAnimation();
  }
});

watch(
  () => preload.value.hasPlayed,
  () => {
    if (preload.value.hasPlayed) {
      startAnimation();
    }
  }
);
</script>

<template>
  <section class="main-container">
    <h1 class="title-projects">Projets</h1>

    <div class="projects-container">
      <article v-for="project in projects" :key="project.name" class="project">
        <div class="description-project">
          <h2 class="title-project">{{ project.name }}</h2>
          <p>
            {{ project.description }}
          </p>
          <div class="link-project">
            <a
              v-if="project.live"
              :href="project.live"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
            >
              live site
            </a>
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
            >
              github
            </a>
          </div>
          <div class="tech-stack">
            <p
              v-for="stack in project.techstack"
              :key="stack"
              @pointerenter="scrambleHoverAnimation"
            >
              • <span class="link">{{ stack }}</span>
            </p>
          </div>
        </div>

        <div class="image-project">
          <NuxtImg :src="'/portofolio' + project.image" alt="Project Image" />
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.main-container {
  font-family: "PP Editorial", serif;
}

.title-projects {
  font-size: 3em;
  margin-bottom: 5rem;
  opacity: 0;
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 7rem;
  position: relative;
}

.project {
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 2rem;
  min-height: 50dvh;
  opacity: 0;
  padding-bottom: 2rem;
}

.project:not(:last-child) {
  border-bottom: 1px #171717 solid;
}

.description-project {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.title-project {
  font-size: 2.2em;
  font-weight: bold;
}

.description-project p {
  font-size: 1.2em;
  line-height: 1.6;
  max-width: 90%;
}

.link-project {
  text-transform: uppercase;
  display: flex;
  gap: 0.75rem;
}

.tech-stack {
  margin-top: auto;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  text-transform: uppercase;
  font-family: "Work Sans";
}

.tech-stack p {
  cursor: pointer;
}

.image-project {
  display: flex;
  align-items: center;
  justify-content: end;
}

.image-project img {
  width: 100%;
  max-width: 480px;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
  filter: blur(5px);
  transition: filter 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.project:hover .image-project img {
  filter: blur(0px);
}
</style>
