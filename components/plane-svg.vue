<script setup>
import gsap from "gsap";

const preload = usePreload();

function startAnimationSvg() {
  const tl = gsap.timeline();

  tl.fromTo(
    ".svg-plane",
    {
      opacity: 0,
      top: "100%",
    },
    {
      opacity: 1,
      top: "50%",
      ease: "elastic.inOut(0.3, 0.7)",
      duration: 1.5,
    }
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
    width="172"
    height="200"
    viewBox="0 0 172 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="svg-plane"
  >
    <g filter="url(#filter0_d_107_5)">
      <path
        d="M5 1L96.5 147M5 1L118.5 132M5 1L62.5 190.5M5 1L166.5 98M5 1L118.5 154.5M96.5 147L62.5 190.5M96.5 147L107.5 150.75M118.5 132L166.5 98M118.5 132V143.25M118.5 154.5L107.5 150.75M118.5 154.5V143.25M62.5 190.5L107.5 150.75M166.5 98L118.5 143.25"
        stroke="white"
        stroke-opacity="0.8"
        stroke-width="0.8"
        shape-rendering="crispEdges"
      />
    </g>
  </svg>
</template>

<style lang="css" scoped>
svg {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  z-index: -2;
  width: 500px;
  height: auto;
  opacity: 0;
}

@media (max-width: 768px) {
  svg {
    left: 50%;
    width: 280px; /* lebih kecil di mobile */
  }
}
</style>
