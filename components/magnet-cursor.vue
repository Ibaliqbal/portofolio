<script setup lang="js">
import gsap from 'gsap';

function updateCursor(e) {
  gsap.to(".cursor", {
    duration: 2,
    top: e.pageY + "px",
    left: e.pageX + "px",
    ease: "power3.out",
  });
}

onMounted(() => {
  document.addEventListener("mousemove", updateCursor)
})

onUnmounted(() => {
  document.removeEventListener("mousemove", updateCursor)
})
</script>

<template>
  <div class="cursor" />
</template>

<style scoped lang="css">
.cursor {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #e0e0e0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;
  filter: blur(4px);
  pointer-events: none;
  z-index: -10;
}

/* Tablet (768px - 1024px) */
@media screen and (max-width: 1024px) {
  .cursor {
    display: none;
  }
}
</style>
