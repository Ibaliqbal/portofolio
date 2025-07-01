<script setup>
import gsap from "gsap";

const openMenu = ref(false);

const route = useRoute();
const router = useRouter();

const fullPath = computed(() => route.fullPath);
const navigation = computed(() => [
  {
    to: "/projects",
    name: "projects",
    active: fullPath.value === "/projects",
  },
  {
    to: "/get-in-touch",
    name: "get in touch",
    active: fullPath.value === "/get-in-touch",
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
        clipPath: "inset(0 0 100% 0)",
        duration: 0.75,
        ease: "elastic.inOut(0.2, 0.5)",
      })
      .from(".foto-profile", {
        clipPath: "inset(0 100% 0 0)",
        duration: 0.75,
        ease: "power3.out",
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
    .to(".foto-profile", {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.75,
      ease: "power3.out",
    })
    .to(".menu-mobile", {
      clipPath: "inset(0 0 100% 0)",
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

function movePath(e, to) {
  e.preventDefault();
  handleClose();
  if (!openMenu.value)
    router.push({
      name: to,
    });
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
            href="https://drive.google.com/file/d/11m6JlPeZrxrvHiG89jB0sjb5nvGoM2yO/view?usp=drive_link"
            rel="noopener noreferrer"
            target="_blank"
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
        <div class="foto-profile">
          <NuxtImg src="/profile.jpg" alt="My Profile" class="profile-image" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.menu-mobile {
  height: 80dvh;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  border-bottom-left-radius: 5px;
  position: relative;
}

@media screen and (max-width: 1024px) {
  .menu-mobile {
    border-bottom-left-radius: 0px;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-transform: uppercase;
  font-size: 1.75em;
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

.foto-profile {
  position: absolute;
  overflow: hidden;
  border-radius: 5px;
  bottom: 1.2rem;
  right: 1.25rem;
  width: 200px;
  height: 200px;
}

.foto-profile img {
  width: 100%;
  height: 100%;
  z-index: 10;
  object-fit: cover;
  object-position: center;
  filter: grayscale(1);
  border-radius: 5px;
}

/* === Responsive for Mobile Devices === */
@media (max-width: 768px) {
  .menu-mobile {
    width: 100%;
    justify-content: flex-start;
    height: 70%;
  }

  .menu {
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

  .foto-profile {
    top: 1.5rem;
    left: 1.25rem;
    width: 100px;
    height: 100px;
  }
}
</style>
