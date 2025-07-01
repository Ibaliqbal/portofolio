<script setup>
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ArrowDown } from "lucide-vue-next";

const positions = ["fullstack", "frontend"];
const indexPosition = ref(0);
const currentPosition = ref(positions[0]);
const positionEl = ref(null);
let intervalId = null;
const preload = usePreload();

const isDoneTextAnimation = ref(false);

function startTextAnimation() {
  const splitText = SplitText.create(".text", {
    type: "words,lines",
    linesClass: "clip-text",
    wordsClass: "words-welcome",
  });

  const tl = gsap.timeline();

  tl.set(".text", {
    perspective: 500,
  });

  tl.set(splitText.words, {
    opacity: 0,
  });

  tl.to(".introduce .text", {
    opacity: 1,
  })
    .to(
      splitText.words,
      {
        opacity: 1,
        duration: 0.25,
        ease: "power3.in",
        stagger: {
          each: 0.1,
          from: "random",
        },
        onComplete: () => {
          isDoneTextAnimation.value = true;
        },
      },
      "<"
    )
    .to(
      ".lottie-plane",
      {
        opacity: 1,
        duration: 0.5,
        ease: "power3",
      },
      "<=0.05"
    );
}

onMounted(async () => {
  await nextTick();

  // Reset state
  isDoneTextAnimation.value = false;
  indexPosition.value = 0;
  currentPosition.value = positions[0];

  if (preload.value.hasPlayed) {
    startTextAnimation();
  }
});

watch(
  () => preload.value.hasPlayed,
  () => {
    if (preload.value.hasPlayed) {
      startTextAnimation();
    }
  }
);

// Start loop interval when ready
watch(isDoneTextAnimation, (ready) => {
  if (ready) {
    intervalId = setInterval(() => {
      indexPosition.value = (indexPosition.value + 1) % positions.length;
    }, 3000);
    // Watch for index changes to trigger scramble
  }
});

watch(indexPosition, (newIdx) => {
  if (positionEl.value) {
    scrambleAnimation(
      positionEl.value,
      positions[newIdx],
      3,
      "fxoyzlsFSLXOYZ12345"
    );
  }
});

onUnmounted(() => clearInterval(intervalId));
</script>

<template>
  <section class="introduce">
    <p class="text">
      Hai someone 🙌, welcome to my personal website. I&apos;m a passionate
      <span>
        <span ref="positionEl" class="position">{{ currentPosition }}</span>
        developer
      </span>
      who loves crafting clean, modern, and responsive interfaces. Scroll down
      to explore my works, journey, and what I&apos;m currently building 👨‍💻✨
    </p>

    <div class="scroll">
      <ArrowDown :size="24" :stroke-width="1.75" class="arrow-down" />
      <p>scroll</p>
    </div>
    <PlaneSvg />
  </section>
</template>

<style lang="css" scoped>
.introduce {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.introduce .text {
  max-width: 100vw;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 1.95em;
  opacity: 0;
}

.introduce .text span {
  font-weight: 600;
  cursor: default;
}

.introduce .scroll {
  font-family: "PP Editorial", serif;
  font-size: 1.5rem;
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  color: #555555;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.arrow-down {
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

/* Desktop besar > 1440px */
@media screen and (min-width: 1441px) {
  .introduce .text {
    font-size: 2.5em;
  }

  .introduce .scroll {
    font-size: 2rem;
  }
}

/* Tablet (768px - 1024px) */
@media screen and (max-width: 1024px) {
  .introduce .text {
    font-size: 1.6em;
    width: 100vw;
    padding-inline: 1.5rem;
  }

  .introduce .scroll {
    font-size: 1.2rem;
  }
}

/* Phone (< 768px) */
@media screen and (max-width: 767px) {
  .introduce .text {
    font-size: 1.1em;
    width: 100vw;
    padding-inline: 1.5rem;
  }

  .introduce .scroll {
    font-size: 1rem;
  }
}
</style>
