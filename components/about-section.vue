<script setup lang="js">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
onMounted(() => {
  const isMobile = window.innerWidth <= 767;
  const isTablet = window.innerWidth > 767 && window.innerWidth <= 1024;


  const splitText = SplitText.create(".text-about-container p", {
    type: "words,lines",
    linesClass: "clip-text",
  });

  const animationText = gsap.from(splitText.words, {
    opacity: 0.2,
    duration: 0.5,
    stagger: 0.2,
    filter: "blur(5px)",
    ease: "power3",

  });

  const animationProfile = gsap.to(".profile-image", {
    scale: 1.2,
    duration: 1,
    ease: "none",
  });

  gsap.from(".profile-image", {
    clipPath: "inset(0 0 100% 0)",
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".container-about",
      start: "top center",
      toggleActions: "play none none none",
      scrub: false
    }
  })

  // ScrollTrigger Text Animation
  ScrollTrigger.create({
    trigger: ".container-about",
    start: isMobile
      ? "center bottom-=50"
      : isTablet
      ? "center bottom-=100"
      : "top bottom-=150",
    end: isMobile
      ? "bottom bottom-=20"
      : isTablet
      ? "bottom bottom-=10"
      : "bottom bottom",
    scrub: true,
    animation: animationText,
  });

  // ScrollTrigger Image Scale Animation
  ScrollTrigger.create({
    trigger: ".container-about",
    start: isMobile
      ? "bottom-=100 bottom-=50"
      : isTablet
      ? "bottom-=150 bottom-=100"
      : "bottom-=200 bottom-=120",
    end: isMobile
      ? "bottom center"
      : isTablet
      ? "bottom center+=50"
      : "bottom center+=100",
    scrub: true,
    animation: animationProfile,
  });

  // Optional: Recalculate on resize
  window.addEventListener("resize", () => ScrollTrigger.refresh());
});
</script>

<template>
  <section class="about">
    <div class="container-about">
      <div class="profile-image-container">
        <NuxtImg src="/profile.jpg" alt="My Profile" class="profile-image" />
      </div>
      <div class="text-about-container">
        <h1>Who am i ?!</h1>
        <p>
          Hello, my name is
          <a
            href="https://linkedin.com/in/iqbal-muthahhary"
            target="_blank"
            rel="noopener noreferrer"
            class="name"
          >
            Iqbal Muthahhary </a
          >. I am an active university student based in Bogor, West Java,
          Indonesia, with a strong passion for technology particularly in web
          development and digital innovation. I am currently focusing on
          becoming a creative developer, specializing in building interactive
          and full motion websites using GSAP. I’m actively working on an
          open-source project called Creative Club, a personal initiative where
          I explore modern web animation, interactive UI, and visual
          storytelling through code. This project allows me to push the
          boundaries of creative development while continuously improving my
          skills in animation and frontend performance. I regularly share demos,
          previews, and updates from Creative Club on
          <a
            href="https://instagram.com/muthahhary_iqbal"
            target="_blank"
            rel="noopener noreferrer"
            class="name"
          >
            Instagram
          </a>
          to inspire others and document my progress in mastering expressive,
          motion driven web experiences.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css">
.about {
  display: flex;
  padding-block: 1.5rem;
  min-height: 125vh;
  width: 100%;
  position: relative;
  align-items: center;
}

.container-about {
  display: flex;
  gap: 0.5rem;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
}

.container-about div {
  width: 100%;
  height: 100%;
}

.text-about-container p {
  font-size: 1rem;
  letter-spacing: -0.5px;
}

.text-about-container h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-family: "Canopee";
  margin-bottom: 1.5rem;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .container-about {
    flex-direction: column;
  }

  .container-about div {
    width: 100%;
  }

  .text-about-container p {
    font-size: 1.25rem;
  }

  .text-about-container h1 {
    margin-top: 0;
  }
}

@media (min-width: 1024px) {
  .container-about {
    flex-direction: row;
  }

  .container-about div {
    width: 50%;
  }

  .text-about-container p {
    font-size: 1.45rem;
  }

  .text-about-container h1 {
    margin-top: 0;
  }
}

@media (min-width: 1400px) {
  .container-about {
    flex-direction: row;
  }

  .container-about div {
    width: 50%;
  }

  .text-about-container p {
    font-size: 1.65rem;
  }

  .text-about-container h1 {
    margin-top: 0;
  }
}

@media (min-width: 1600px) {
  .container-about {
    flex-direction: row;
  }

  .container-about div {
    width: 50%;
  }

  .text-about-container p {
    font-size: 2rem;
  }
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
  z-index: 10;
  object-fit: cover;
  object-position: center;
  filter: grayscale(1);
  border-radius: 5px;
  transition: filter 0.3s ease;
  will-change: transform;
}

.profile-image:hover {
  filter: grayscale(0);
}
</style>
