<script setup>
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const words = ["Hello", "Halo", "Ciao", "こんにちは", "Привет", "Hola", "Olá"];
const indexWords = ref(0);
const preload = usePreload();
let intervalWords = null;
const doneWelcomeAnimation = ref(false);

function nextWord() {
  if (indexWords.value >= words.length - 1) {
    clearInterval(intervalWords);
    return;
  }
  intervalWords = setInterval(() => {
    if (indexWords.value >= words.length - 1) {
      clearInterval(intervalWords);
      return;
    }
    indexWords.value++;
  }, 350);
}

onMounted(() => {
  const tl = gsap.timeline();
  const splitTextAreReady = SplitText.create("#are-ready", {
    type: "words",
    wordsClass: "welcome-words",
  });

  tl.to("#are-ready", {
    opacity: 1,
  })
    .fromTo(
      splitTextAreReady.words,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
      }
    )
    .to(splitTextAreReady.words, {
      opacity: 0,
      y: -100,
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: "end",
      },
      delay: 1,
    })
    .to(".welcome", {
      opacity: 1,
      duration: 0.75,
      onComplete: () => {
        doneWelcomeAnimation.value = true;
      },
    });
});

watch(doneWelcomeAnimation, () => {
  if (doneWelcomeAnimation.value) {
    nextWord();
  }
});

onUnmounted(() => {
  clearInterval(intervalWords);
});

watch(indexWords, () => {
  if (indexWords.value >= words.length - 1) {
    const tl = gsap.timeline();
    tl.to(".welcome", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
    })
      .to(".divider-preload", {
        scaleX: 1,
        duration: 2,
        ease: "elastic.out(0.2, 0.8, 0.4)",
      })
      .to(".divider-preload", {
        opacity: 0,
        duration: 0.5,
        ease: "power3",
      })
      .to(".block-top-preload", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 2,
        ease: "elastic.out(0.2, 0.5, 0.4)",
      })
      .to(
        ".block-bottom-preload",
        {
          scaleY: 0,
          transformOrigin: "bottom",
          duration: 2,
          ease: "elastic.out(0.2, 0.5, 0.4)",
          onComplete: () => {
            preload.value.hasPlayed = true;
            preload.value.isActive = false;
          },
        },
        "< 0.05"
      );
  }
});
</script>
<template>
  <section v-if="preload.isActive" class="preload">
    <h1 id="are-ready" class="title">are you ready ?!</h1>
    <h1 class="title welcome welcome-words">
      {{ words[indexWords] }}
    </h1>
    <div class="divider-preload" />
    <div class="block-top-preload" />
    <div class="block-bottom-preload" />
  </section>
</template>

<style lang="css" scoped>
#are-ready {
  text-transform: uppercase;
  opacity: 0;
}

.welcome-words {
  opacity: 0;
}

.title {
  z-index: 12;
  font-family: "PP Editorial", sans-serif;
}
.divider-preload {
  width: 100%;
  height: 2px;
  background-color: #000000;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 50%;
  transform: scaleX(0);
  transform-origin: left;
}
</style>
