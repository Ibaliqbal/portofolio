<script setup>
import gsap from "gsap";

const openMenu = ref(false);

const route = useRoute();

const fullPath = computed(() => route.fullPath);
const navigation = computed(() => [
  {
    to: "/projects",
    name: "projects",
    active: fullPath.value === "/projects",
  },
]);

const socials = [
  {
    name: "instagram",
    href: "https://instagram.com/muthahhary_iqbal",
  },
  {
    name: "github",
    href: "https://github.com/Ibaliqbal",
  },
  {
    name: "linkedin",
    href: "https://linkedin.com/in/iqbal-muthahhary",
  },
];

watch(openMenu, async (newValue) => {
  await nextTick();
  if (newValue) {
    const timeline = gsap.timeline();

    timeline
      .to(".menu-text", {
        opacity: 0,
        duration: 0.5,
        ease: "power3",
      })
      .from(
        ".overlay-menu-mobile",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
        },
        "<"
      )
      .from(".menu-mobile", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.75,
        ease: "elastic.inOut(0.2, 0.5)",
      })
      .from(".socials-navbar li", {
        y: -20,
        duration: 0.5,
        opacity: 0,
        ease: "power3.inOut",
        stagger: {
          each: 0.05,
        },
      })
      .from(
        ".menu a",
        {
          x: -20,
          duration: 0.5,
          opacity: 0,
          ease: "power3.inOut",
          stagger: {
            each: 0.05,
          },
        },
        "<=0.005"
      );
  }
});

function handleClose() {
  const timeline = gsap.timeline({
    onComplete: () => (openMenu.value = false),
  });

  timeline
    .to(".menu a", {
      x: -20,
      duration: 0.5,
      opacity: 0,
      ease: "power3.inOut",
      stagger: {
        each: 0.05,
      },
    })
    .to(
      ".socials-navbar li",
      {
        y: -20,
        duration: 0.5,
        opacity: 0,
        ease: "power3.inOut",
        stagger: {
          each: 0.05,
        },
      },
      "<=0.005"
    )
    .to(".menu-mobile", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.75,
      ease: "elastic.inOut(0.2, 0.5)",
    })
    .to(".overlay-menu-mobile", {
      opacity: 0,
      duration: 0.5,
      ease: "power3.inOut",
    })
    .to(
      ".menu-text",
      {
        opacity: 1,
        duration: 0.5,
        ease: "power3",
      },
      "<"
    );
}

async function movePath(e, to) {
  e.preventDefault();
  handleClose();
  await navigateTo(to);
}
</script>

<template>
  <div class="toggle">
    <p
      role="button"
      class="menu-text link"
      style="cursor: pointer"
      @click="() => (openMenu = true)"
      @pointerenter="scrambleHoverAnimation"
    >
      <span>menu</span>
    </p>

    <section v-if="openMenu" class="overlay-menu-mobile" @click="handleClose">
      <div class="menu-mobile">
        <!-- Close Button -->
        <p
          class="close-btn"
          role="button"
          style="cursor: pointer"
          @click="handleClose"
          @pointerenter="scrambleHoverAnimation"
        >
          <span>close</span>
        </p>

        <!-- Menu Links -->
        <div class="menu">
          <a
            class="link"
            href="/files/IQBAL MUTHAHHARY RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            @pointerenter="scrambleHoverAnimation"
          >
            <span>my cv</span>
          </a>

          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :class="['link', { active: item.active }]"
            :to="item.to"
            @pointerenter="scrambleHoverAnimation"
            @click="(e) => movePath(e, item.to)"
          >
            <span>{{ item.name }}</span>
          </NuxtLink>
        </div>

        <!-- Social Links -->
        <ul class="socials-navbar">
          <li v-for="social in socials" :key="social.name" class="link">
            <GoToWebsite :href="social.href" :text="social.name">{{
              social.name
            }}</GoToWebsite>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.overlay-menu-mobile {
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  width: 100%;
  height: 100dvh;
  inset: 0;
  z-index: 150;
  display: flex;
  justify-content: end;
}

.menu-mobile {
  height: 80dvh;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  padding: 1.2rem 1rem;
  border-bottom-left-radius: 5px;
  position: relative;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
}

.socials-navbar {
  position: absolute;
  top: 1.5rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
}

/* === Responsive for Mobile Devices === */
@media (max-width: 768px) {
  .menu-mobile {
    width: 100%;
    justify-content: flex-start;
  }

  .menu {
    font-size: 1.2em;
    margin-top: auto;
  }

  .socials-navbar {
    position: static;
    margin-top: 2rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-size: 0.9rem;
  }

  .close-btn {
    position: static;
    align-self: flex-end;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
}
</style>
