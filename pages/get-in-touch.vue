<template>
  <section class="main-container">
    <div>
      <h1>get in touch</h1>
      <p>let's go connect with me!!</p>
    </div>
    <div class="socials">
      <a
        class="social"
        href="http://www.linkedin.com/in/iqbal-muthahhary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="first">linkedin</span>
        <span class="second">linkedin</span>
      </a>
      <a
        class="social"
        href="http://github.com/Ibaliqbal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="first">github</span>
        <span class="second">github</span>
      </a>
      <a
        class="social"
        href="http://instagram.com/muthahhary_iqbal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="first">instagram</span>
        <span class="second">instagram</span>
      </a>
    </div>
    <PlaneSvg />
  </section>
</template>

<style scoped>
.main-container {
  min-height: 90dvh;
  position: relative;
}

section {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  text-transform: uppercase;
  padding: 2rem;
}

/* Default untuk desktop/tablet */
section div {
  width: 50%;
  min-height: 100%;
}

/* ✅ Responsive untuk device ukuran ponsel */
@media (max-width: 768px) {
  section {
    flex-direction: column;
    justify-content: center;
    gap: 1.75rem;
  }

  section div {
    width: 100%;
  }
}

section div:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

section div:first-child h1 {
  font-size: clamp(2rem, 5vw, 6rem);
  font-family: "Sora";
}

section div:first-child p {
  font-weight: 600;
}

.socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

/* Responsive font size pakai clamp */
.social {
  font-family: "Canopee", sans-serif;
  font-size: clamp(2rem, 6vw, 6rem);
  line-height: 1;
  overflow: hidden;
  position: relative;
  display: inline-block;
  height: 1em;
  cursor: pointer;
  width: 6ch;
}

.social span {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  transition: top 0.5s ease-in-out;
}

.social .first {
  top: 50%;
}

.social .second {
  top: 200%;
}

.social:hover .first {
  top: -100%;
}

.social:hover .second {
  top: 50%;
}
</style>
