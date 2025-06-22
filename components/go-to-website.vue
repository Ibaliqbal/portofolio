<script setup lang="ts">
type Props = {
  href: string;
  text: string;
};

const open = ref(false);

const { text, href } = defineProps<Props>();

function handleClose() {
  open.value = false;
}

function handleOpen(e: MouseEvent) {
  e.preventDefault();
  open.value = true;
}
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" @click="handleOpen">
    <slot />
  </a>
  <WebTransition
    :handle-close="handleClose"
    :href="href"
    :text="text"
    :is-open="open"
  />
</template>
