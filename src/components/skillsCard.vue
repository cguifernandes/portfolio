<template>
  <div
    v-motion
    class="text-white bg-gradient-to-tl from-grey-800 shadow-lg to-grey-700 flex items-center flex-1 min-w-[450px] p-6 rounded-md"
  >
    <slot />
    <div class="h-32 w-[3px] bg-grey-500 mx-4" />
    <div class="w-fit space-y-1">
      <h1 class="font-montserrat font-bold text-xl">
        {{ name }}
      </h1>
      <p class="text-white/50">
        {{ descripion }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SkillsProps {
  name: string
  descripion: string
}

const { descripion, name } = defineProps<SkillsProps>()
</script>
