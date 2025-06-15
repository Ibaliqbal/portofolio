<script setup>
const route = useRoute();

const fullPath = computed(() => route.fullPath);
const navigation = computed(() => [
  {
    to: "/projects",
    name: "projects",
    active: fullPath.value === "/projects",
  },
  {
    to: "/contact",
    name: "contact",
    active: fullPath.value === "/contact",
  },
]);

onMounted(() => {
  const links = document.querySelectorAll(".link");

  for (const link of links) {
    link.addEventListener("pointerenter", scrambleHoverAnimation);
  }
});
</script>

<template>
  <div class="header-wrapper">
    <header>
      <NuxtLink to="/">
        <h1 class="title">balsss</h1>
      </NuxtLink>
      <nav>
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :class="['link', { active: item.active }]"
          :to="item.to"
        >
          <span>{{ item.name }}</span>
        </NuxtLink>
      </nav>
      <div class="divider" />
    </header>
  </div>
</template>

<style scoped lang="css">
.header-wrapper {
  height: auto;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  /* padding-block: 1.25rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

header {
  height: min-content;
  width: 100%;
  padding: 1.3rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #000000;
}

nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

nav .link {
  font-size: 1.25rem;
  font-weight: 400;
  transition: filter 0.3s ease, opacity 0.3s ease;
  text-transform: uppercase;
}

nav:hover .link {
  filter: blur(3px);
  opacity: 0.5;
}

.link.active::before {
  transform: scaleX(1);
  transform-origin: left;
}

nav .link:hover {
  filter: none;
  opacity: 1;
}

.divider {
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #171717;
  width: 99%;
  border-radius: 50%;
}
</style>
