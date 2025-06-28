<template>
  <div class="header-wrapper">
    <header>
      <NuxtLink to="/">
        <h1 class="title">balsss</h1>
      </NuxtLink>
      <MenuMobile />
    </header>
    <div class="divider" />
  </div>
</template>

<style scoped lang="css">
.header-wrapper {
  height: auto;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

header {
  height: min-content;
  width: 100%;
  padding: 1.3rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #000000;
}

.menu .link {
  font-size: 1.25rem;
  font-weight: 400;
  transition: filter 0.3s ease, opacity 0.3s ease;
  text-transform: uppercase;
}

.menu:hover .link {
  filter: blur(3px);
  opacity: 0.5;
}

.link.active::before {
  transform: scaleX(1);
  transform-origin: left;
}

.menu .link:hover {
  filter: none;
  opacity: 1;
}

.divider {
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #171717;
  width: 99%;
  border-radius: 50%;
}

.title,
.toggle {
  z-index: 160;
}
.toggle {
  display: block;
  text-transform: uppercase;
}
</style>

<!-- href="/files/IQBAL MUTHAHHARY RESUME.pdf"
          download="IQBAL MUTHAHHARY RESUME.pdf" -->
