<template>
  <footer>
    <NuxtLink to="/" class="title">balss</NuxtLink>
    <ul class="socials">
      <li class="link">
        <a
          href="https://instagram.com/muthahhary_iqbal"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </li>
      <li class="link">
        <a
          href="https://github.com/Ibaliqbal"
          target="_blank"
          rel="noopener noreferrer"
          >github</a
        >
      </li>
      <li class="link">
        <a
          href="https://linkedin.com/in/iqbal-muthahhary"
          target="_blank"
          rel="noopener noreferrer"
          >linkedin</a
        >
      </li>
    </ul>
  </footer>
</template>

<style lang="css" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.25rem;
  padding-block: 0.5rem;
}

.title {
  text-transform: uppercase;
}

.socials {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
}

.socials {
  text-transform: uppercase;
}
</style>
