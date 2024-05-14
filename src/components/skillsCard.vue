<template>
  <div
    :class="[
      'text-white glass-effect duration-200 cursor-default',
      'flex items-center flex-1 min-w-[320px] sm:min-w-[420px] px-6 py-8 rounded-md'
    ]"
  >
    <slot />
    <div class="h-32 w-[3px] bg-grey-500 mx-4 hidden sm:inline" />
    <div class="w-fit space-y-1">
      <h1 class="font-bold font-montserrat text-lg">
        {{ name }}
      </h1>
      <p class="text-white/40">
        {{ $t(descripion) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SkillsProps {
	name: string;
	descripion: string;
}

const { name } = defineProps<SkillsProps>();
</script>
