<script setup lang="js">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
onMounted(() => {

  gsap.registerPlugin(ScrollTrigger, SplitText)

  const splitText = SplitText.create(".text-about-container p", {
    type: "words,lines",
    linesClass: "clip-text",
  })

  gsap.set(".text-about-container p", {
    perspective: 500
  })

  const animationText = gsap.from(splitText.words, {
    opacity: .2,
    duration: 0.3,
    stagger: 0.2
  })

  const animationProfile = gsap.to(".profile-image", {
    scale: 1.2,
    duration: 1,
    ease: "none"
  })

  ScrollTrigger.create({
    trigger: ".about",
    start: "top bottom-=100",
    end: "bottom bottom-=10",
    scrub: true,
    animation: animationText
  })

  ScrollTrigger.create({
    trigger: ".about",
    start: "center+=100 bottom-=100",
    end: "bottom bottom-=10",
    scrub: true,
    animation: animationProfile
  })
})
</script>

<template>
  <section class="about">
    <div class="profile-image-container">
      <NuxtImg src="/profile.jpg" alt="My Profile" class="profile-image" />
    </div>
    <div class="text-about-container">
      <p>
        Hello, my name is
        <a
          href="https://linkedin.com/in/iqbal-muthahhary"
          target="_blank"
          rel="noopener noreferrer"
          class="name"
        >
          Iqbal Muthahhary
        </a>
        . I am an active university student based in Bogor, West Java,
        Indonesia, with a strong passion for technology particularly in the
        areas of web development and digital innovation. I have hands-on
        experience working with modern frameworks such as React and Next.js, and
        I am currently deepening my expertise in Vue, Nuxt, and Go (Golang). I
        am highly motivated to continuously learn, develop efficient solutions,
        and contribute to building clean, responsive, and user-focused digital
        experiences.
      </p>
    </div>
  </section>
</template>

<style scoped lang="css">
.about {
  display: flex;
  gap: 0.5rem;
  padding-block: 1.5rem;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.about div {
  width: 50%;
  height: 100%;
}

.text-about-container {
  font-size: 2.25rem;
  letter-spacing: -0.5px;
}

.text-about-container p {
  letter-spacing: -0.5;
}
.name {
  font-weight: 600;
  position: relative;
}

.name::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  background: currentColor;
  pointer-events: none;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s cubic-bezier(0.24, 0.43, 0.15, 0.97);
  will-change: transform;
  width: 100%;
  height: 2px;
}

.name:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.profile-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: grayscale(1);
  border-radius: 5px;
  z-index: 10;
  transition: filter 0.3s ease;
  will-change: transform;
}

.profile-image:hover {
  filter: grayscale(0);
}
</style>
