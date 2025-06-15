<script setup lang="ts"></script>

<template>
  <div class="header-wrapper">
    <header>
      <NuxtLink to="/">
        <h1 class="title">balsss</h1>
      </NuxtLink>
      <nav>
        <NuxtLink class="link" to="/about">ABOUT</NuxtLink>
        <NuxtLink class="link" to="/projects">PROJECTS</NuxtLink>
        <NuxtLink class="link" to="/contact">CONTACT</NuxtLink>
      </nav>
      <div class="divider" />
    </header>
  </div>
</template>

<style scoped lang="css">
.header-wrapper {
  height: auto;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding-block: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

header {
  height: min-content;
  width: 100%;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

nav .link {
  font-size: 1.25rem;
  font-weight: 400;
}

.divider {
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #171717;
  width: 98%;
}
</style>
