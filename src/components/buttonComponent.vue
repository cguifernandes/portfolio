<template>
  <button
    v-if="href"
    :href="href"
    :class="['bg-gradient-to-l from-blue-500 to-blue-800 text-white relative h-12 px-4 py-3 rounded-md duration-200', className]"
  >
    <a
      :href="href"
      class="w-full h-full absolute top-0 flex flex-col items-center justify-center left-0"
    >
      <slot />
    </a>
  </button>
  <button
    v-else
    :class="['bg-gradient-to-l from-blue-500 to-blue-800 text-white relative h-12 px-4 py-3 rounded-md duration-200', className]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  className?: string
  href?: string
}

const { className, href } = defineProps<ButtonProps>()
</script>
