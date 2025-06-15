<script setup>
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ArrowDown } from "lucide-vue-next";

const positions = ["fullstack", "frontend"];
const indexPosition = ref(0);
const currentPosition = ref(positions[0]);
const positionEl = ref(null);
let intervalId = null;

const isDoneTextAnimation = ref(false);

onMounted(() => {
  // await nextTick();

  // Reset state
  isDoneTextAnimation.value = false;
  indexPosition.value = 0;
  currentPosition.value = positions[0];

  gsap.registerPlugin(SplitText);

  const splitText = SplitText.create(".text", {
    type: "words,lines",
    linesClass: "clip-text",
  });

  gsap.set(".text", {
    perspective: 500,
  });
  gsap.set(splitText.words, {
    opacity: 0,
  });

  gsap.to(splitText.words, {
    opacity: 1,
    duration: 0.5,
    ease: "power3.in",
    stagger: {
      each: 0.1,
      from: "random",
    },
    onComplete: () => {
      isDoneTextAnimation.value = true;
    },
  });
});

// Start loop interval when ready
watch(isDoneTextAnimation, (ready) => {
  if (ready) {
    intervalId = setInterval(() => {
      indexPosition.value = (indexPosition.value + 1) % positions.length;
    }, 5000);
  }
});

// Watch for index changes to trigger scramble
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
  </section>
</template>

<style lang="css" scoped>
.introduce {
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.introduce .text {
  max-width: 95vw;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 1.95em;
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
</style>
