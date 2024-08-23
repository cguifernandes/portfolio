<template>
  <div
    :class="[
      'text-white glass-effect-light transition-all duration-200 cursor-default',
      'flex flex-col rounded-md w-full min-w-72 h-full lg:w-auto py-2 xl:px-4 px-3 xl:py-3 gap-y-px'
    ]"
  >
    <div class="flex items-center gap-x-2">
      <h1 v-if="isTraslate"class="font-montserrat text-neutral-900 dark:text-neutral-200 text-base xl:text-lg transition-all duration-200">
        {{ $t(name) }}
      </h1>
      <h1 v-else class="font-montserrat text-neutral-900 dark:text-neutral-200 text-base xl:text-lg transition-all duration-200">
        {{ name }}
      </h1>
    </div>
    <p :title="$t(descripion)" :class="['text-neutral-500 text-sm xl:text-base', descriptionClass]">
      {{ $t(descripion) }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface SkillsProps {
	name: string;
	descripion: string;
	descriptionClass?: string;
	isTraslate?: boolean;
}

const { name, descripion, descriptionClass, isTraslate } =
	defineProps<SkillsProps>();
</script>
