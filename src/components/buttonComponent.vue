<template>
  <button
    v-if="href"
    :href="href"
    :class="['bg-gradient-to-l from-blue-500 to-blue-800 text-white relative h-12 px-4 py-3 rounded-md duration-200', className]"
    @click="click"
  >
    <a
      target="_blank"
      :href="href"
      class="w-full h-full absolute top-0 flex flex-col items-center justify-center left-0"
    >
      <slot />
    </a>
  </button>
  <button
    v-else
    :disabled="disabled"
    :class="['bg-gradient-to-l from-blue-500 to-blue-800 text-white relative h-12 px-4 py-3 rounded-md duration-200', className]"
    @click="click"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
	className?: string;
	href?: string;
	click?: (event: MouseEvent) => void;
	disabled?: boolean;
}

const { className, href, click, disabled } = defineProps<ButtonProps>();
</script>
