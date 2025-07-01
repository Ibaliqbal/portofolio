<script setup lang="js">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
onMounted(() => {
  const isMobile = window.innerWidth <= 767;
  const isTablet = window.innerWidth > 767 && window.innerWidth <= 1024;
  // const isDesktop = window.innerWidth > 1024;

  const splitText = SplitText.create(".text-about-container p", {
    type: "words,lines",
    linesClass: "clip-text",
  });

  gsap.set(".text-about-container p", {
    perspective: 500,
  });

  const animationText = gsap.from(splitText.words, {
    opacity: 0.2,
    duration: 0.5,
    stagger: 0.2,
    filter: "blur(5px)",
  });

  const animationProfile = gsap.to(".profile-image", {
    scale: 1.2,
    duration: 1,
    ease: "none",
  });

  const revealAnimationProfile = gsap.from(".profile-image", {
    clipPath: "inset(0 0 100% 0)", // dari atas
    duration: 1,
    ease: "power3",
  })

  ScrollTrigger.create({
    trigger: ".container-about",
    start: isMobile ? "top center+=100" : "top+=10 center-=50",
    end: isMobile ? "top center+=100" : "top+=10 center-=50",
    scrub: false,
    animation: revealAnimationProfile,
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
            Iqbal Muthahhary
          </a>
          . I am an active university student based in Bogor, West Java,
          Indonesia, with a strong passion for technology particularly in the
          areas of web development and digital innovation. I have hands-on
          experience working with modern frameworks such as React and Next.js,
          and I am currently deepening my expertise in Vue, Nuxt, and Go
          (Golang). I am highly motivated to continuously learn, develop
          efficient solutions, and contribute to building clean, responsive, and
          user focused digital experiences.
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
  font-size: 1.25rem; /* default untuk mobile */
  letter-spacing: -0.5px;
}

.text-about-container h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-family: "Canopee";
  margin-bottom: 1.5rem;
  margin-top: 1rem;
}

/* Tablet (≥768px) */
@media (min-width: 768px) {
  .container-about {
    flex-direction: column;
  }

  .container-about div {
    width: 100%;
  }

  .text-about-container p {
    font-size: 1.5rem;
  }

  .text-about-container h1 {
    margin-top: 0;
  }
}

/* Laptop (≥1024px) */
@media (min-width: 1024px) {
  .container-about {
    flex-direction: row;
  }

  .container-about div {
    width: 50%;
  }

  .text-about-container p {
    font-size: 1.75rem;
  }

  .text-about-container h1 {
    margin-top: 0;
  }
}

/* Desktop (≥1400px) */
@media (min-width: 1400px) {
  .container-about {
    flex-direction: row;
  }

  .container-about div {
    width: 50%;
  }

  .text-about-container p {
    font-size: 1.85rem;
  }

  .text-about-container h1 {
    margin-top: 0;
  }
}

/* Ultra-wide screen (≥1600px) */
@media (min-width: 1600px) {
  .container-about {
    flex-direction: row;
  }

  .container-about div {
    width: 50%;
  }

  .text-about-container p {
    font-size: 2.25rem;
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
