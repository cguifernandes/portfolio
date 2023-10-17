<template>
  <div
    :style="hoveredCard ? { opacity: 0.45 } : { opacity: 1.0 }"
    :class="[
      'text-white bg-gradient-to-tl from-grey-800 shadow-lg to-grey-700 duration-200 cursor-default',
      'flex items-center flex-1 min-w-[320px] sm:min-w-[420px] px-6 py-8 rounded-md hover:scale-105 hover:!opacity-100'
    ]"
  >
    <slot />
    <div class="h-32 w-[3px] bg-grey-500 mx-4 hidden sm:inline" />
    <div class="w-fit space-y-1">
      <h1 class="font-bold font-montserrat text-lg">
        {{ name }}
      </h1>
      <p class="text-white/40">
        {{ descripion }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SkillsProps {
  name: string
  descripion: string
  hoveredCard: boolean
}

const { descripion, name, hoveredCard } = defineProps<SkillsProps>()
</script>
