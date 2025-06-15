<script setup lang="js"></script>

<template>
  <main class="default-layout">
    <MainNavbar />
    <main>
      <slot />
    </main>
    <MainFooter />
    <MagnetCursor />
  </main>
</template>

<style lang="css" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.default-layout main {
  flex-grow: 1;
}
</style>
