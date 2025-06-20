<script setup>
import { watchEffect } from "vue";
import { VueLenis } from "lenis/vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

const lenisRef = useTemplateRef("lenisRef");

watchEffect((onInvalidate) => {
  if (!lenisRef.value?.lenis) return;

  //  if using GSAP ScrollTrigger, update ScrollTrigger on scroll
  lenisRef.value.lenis.on("scroll", ScrollTrigger.update);

  // add the Lenis requestAnimationFrame (raf) method to GSAP's ticker
  // this ensures Lenis's smooth scroll animation updates on each GSAP tick
  function update(time) {
    lenisRef.value.lenis.raf(time * 1000);
  }
  gsap.ticker.add(update);

  // disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  // clean up GSAP's ticker from the previous execution of watchEffect, or when the effect is stopped
  onInvalidate(() => {
    gsap.ticker.remove(update);
  });
});

// if using GSAP ScrollTrigger, remember to register the plugin
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);
});
</script>

<template>
  <NuxtLayout>
    <PreloadSection />
    <NuxtPage />
  </NuxtLayout>
  <VueLenis ref="lenisRef" root :options="{ autoRaf: false }" />
</template>
