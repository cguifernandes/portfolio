<template>
  <a
    href="https://www.linkedin.com/in/guilherme-fernandes-6b1353243/"
    class="py-2 px-3 hover:bg-grey-700 duration-200 rounded-lg cursor-pointer text-grey-100 hover:text-blue-500"
  >
    <font-awesome-icon
      icon="fa-brands fa-linkedin"
      :size="size"
    />
  </a>
  <a
    href="https://github.com/cguifernandes"
    class="py-2 px-3 hover:bg-grey-700 duration-200 rounded-lg cursor-pointer text-grey-100 hover:text-blue-500"
  >
    <font-awesome-icon
      icon="fa-brands fa-github"
      :size="size"
    />
  </a>
  <a
    href="https://www.instagram.com/_.guiii/"
    class="py-2 px-3 hover:bg-grey-700 duration-200 rounded-lg cursor-pointer text-grey-100 hover:text-blue-500"
  >
    <font-awesome-icon
      icon="fa-brands fa-instagram"
      :size="size"
    />
  </a>
  <a
    href="mailto:gui.adfer@gmail.com"
    class="py-2 px-3 hover:bg-grey-700 duration-200 rounded-lg cursor-pointer text-grey-100 hover:text-blue-500"
  >
    <font-awesome-icon
      icon="fa-solid fa-envelope"
      :size="size"
    />
  </a>
</template>

<script setup lang="ts">
interface LinksProps {
  size: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
}

const { size } = defineProps<LinksProps>()
</script>
