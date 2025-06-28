<script setup>
import gsap from "gsap";

const preload = usePreload();

function startAnimationSvg() {
  const tl = gsap.timeline();
  tl.to(".plane", {
    opacity: 1,
  }).from(
    ".svg-plane",
    {
      drawSVG: "0% 0%",
      ease: "elastic.in(0.2, 0.5)",
      duration: 4,
    },
    "<=0.5"
  );
}

onMounted(() => {
  if (preload.value.hasPlayed) {
    startAnimationSvg();
  }
});

watch(
  () => preload.value.hasPlayed,
  () => {
    if (preload.value.hasPlayed) {
      startAnimationSvg();
    }
  }
);
</script>

<template>
  <svg
    width="287"
    height="281"
    viewBox="0 0 287 281"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="plane"
  >
    <path
      class="svg-plane"
      d="M0.5 1L194.5 197.5M0.5 1L285.5 185L194.5 197.5M0.5 1L158 279L194.5 197.5M0.5 1L194.5 254V197.5"
      stroke="white"
    />
  </svg>
</template>

<style lang="css" scoped>
svg {
  position: absolute;
  top: 40%;
  left: 30%;
  transform: translate(-50%, -50%);
  z-index: -2;
  width: 500px;
  height: auto;
  opacity: 0;
}

@media (max-width: 768px) {
  svg {
    top: 30%; /* geser sedikit ke bawah jika perlu */
    left: 50%;
    width: 280px; /* lebih kecil di mobile */
    opacity: 0;
  }
}
</style>
