<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const isDoneAnimationTextScroll = ref(false);

onMounted(() => {
  const splitTextWannaSee = SplitText.create(".wanna-see .text", {
    linesClass: ".clip-text",
    type: "words,lines",
  });

  gsap.set(".wanna-see .text", {
    perspective: 500,
  });

  const animationsTextWannaSee = gsap.from(splitTextWannaSee.words, {
    y: 100,
    duration: 0.5,
    stagger: 0.05,
    opacity: 0,
    ease: "none",
    onComplete: () => {
      isDoneAnimationTextScroll.value = true;

      const textElement = document.querySelector(".wanna-see .text");
      if (textElement) {
        textElement.addEventListener("pointerenter", handlePointerEnter);
        textElement.addEventListener("pointerleave", handlePointerLeave);
      }
    },
  });

  ScrollTrigger.create({
    trigger: ".wanna-see",
    start: "top center",
    animation: animationsTextWannaSee,
  });
});

onUnmounted(() => {
  const textElement = document.querySelector(".wanna-see .text");
  if (textElement) {
    textElement.removeEventListener("pointerenter", handlePointerEnter);
    textElement.removeEventListener("pointerleave", handlePointerLeave);
  }
});

function handlePointerEnter(e) {
  scrambleAnimation(e.target, "yes, i wanna see that !!!", 3);
}

function handlePointerLeave(e) {
  scrambleAnimation(e.target, "you wanna see my projects ?", 3);
}
</script>

<template>
  <section class="wanna-see">
    <NuxtLink to="/projects" class="text">
      you wanna see my projects ?
    </NuxtLink>
  </section>
</template>

<style lang="css" scoped>
.wanna-see {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 1.5rem;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.text {
  font-size: clamp(1rem, 5vw, 3em);
  text-transform: uppercase;
  font-family: "PP Editorial", serif;
}
</style>
