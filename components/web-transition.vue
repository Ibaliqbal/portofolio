<script setup lang="ts">
import gsap from "gsap";

type Props = {
  isOpen: boolean;
  text: string;
  handleClose: () => void;
  href: string;
};

const { isOpen, text, handleClose, href } = defineProps<Props>();

watch(
  () => isOpen,
  async (newVal) => {
    await nextTick();
    const tl = gsap.timeline();
    if (newVal) {
      tl.to(".block-left-transition", {
        scaleY: 1,
        transformOrigin: "bottom",
        duration: 0.75,
        ease: "power3.inOut",
      })
        .to(
          ".block-right-transition",
          {
            scaleY: 1,
            transformOrigin: "bottom",
            duration: 0.75,
            ease: "power3.inOut",
          },
          "<=0.05"
        )
        .to(".page-transition p", {
          opacity: 1,
          duration: 0.5,
          ease: "power3",
          onComplete: () => {
            async function navigate() {
              // will open 'https://nuxt.com' in a new tab
              await navigateTo(href, {
                open: {
                  target: "_blank",
                  windowFeatures: {
                    width: 600,
                    height: 600,
                  },
                },
              });
            }

            navigate();

            setTimeout(() => {
              tl.to(".block-left-transition", {
                scaleY: 0,
                transformOrigin: "top",
                duration: 0.75,
                ease: "power3.inOut",
              })
                .to(
                  ".block-right-transition",
                  {
                    scaleY: 0,
                    transformOrigin: "top",
                    duration: 0.75,
                    ease: "power3.inOut",
                  },
                  "<=0.05"
                )
                .to(".page-transition p", {
                  opacity: 0,
                  duration: 0.5,
                  ease: "power3",
                  onComplete: () => {
                    handleClose();
                  },
                });
            }, 1500);
          },
        });
    }
  }
);
</script>

<template>
  <Teleport to="body">
    <section v-if="isOpen" class="page-transition">
      <p>{{ text }}</p>
      <div class="block-right-transition" />
      <div class="block-left-transition" />
    </section>
  </Teleport>
</template>

<style lang="css" scoped>
.page-transition p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(1.5rem, 6vw, 3em);
  text-transform: uppercase;
  opacity: 0;
  z-index: 2;
  font-weight: bold;
}
</style>
