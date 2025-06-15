<script setup>
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

onMounted(() => {
  gsap.registerPlugin(ScrambleTextPlugin);

  const links = document.querySelectorAll(".socials .link");

  for (const link of links) {
    link.addEventListener("pointerenter", scrambleHoverAnimation);
  }
});
</script>

<template>
  <footer>
    <NuxtLink to="/" class="title">balss</NuxtLink>
    <ul class="socials">
      <li class="link">
        <a
          href="https://instagram.com/muthahhary_iqbal"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </li>
      <li class="link">
        <a
          href="https://github.com/Ibaliqbal"
          target="_blank"
          rel="noopener noreferrer"
          >github</a
        >
      </li>
      <li class="link">
        <a
          href="https://linkedin.com/in/iqbal-muthahhary"
          target="_blank"
          rel="noopener noreferrer"
          >linkedin</a
        >
      </li>
    </ul>
  </footer>
</template>

<style lang="css" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.25rem;
  padding-block: 0.5rem;
  z-index: 3;
}

.title {
  text-transform: uppercase;
}

.socials {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
}

.socials {
  text-transform: uppercase;
}

.socials .link {
  transition: filter 0.3s ease, opacity 0.3s ease;
}

.socials:hover .link {
  filter: blur(3px);
  opacity: 0.5;
}

.socials .link:hover {
  filter: none;
  opacity: 1;
}
</style>
