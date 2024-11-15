<template>
  <button
    v-if="href && !outline && !disabled"
    :href="href"
    :class="['animated-gradient text-white relative h-12 px-4 py-3 rounded-md duration-200 flex items-center gap-2', className]"
    @click="click"
  >
    <a
      target="_blank"
      :href="href"
      :class="['w-full h-full absolute top-0 flex gap-x-2 items-center justify-center left-0', outline ? 'gradient-text' : '']"
    ><slot name="icon" /><slot /></a>
  </button>
  <button
    v-else-if="href && outline"
    :class="['text-white gradient-text btn-outline relative h-12 px-4 py-3 rounded-md duration-200 border-gradient outline flex items-center gap-2', className]"
    @click="click"
  >
    <a
      target="_blank"
      :href="href"
      :class="['w-full h-full absolute top-0 flex gap-x-2 items-center justify-center left-0', outline ? 'gradient-text' : '']"
    ><slot name="icon" /><slot /></a>
  </button>
  <button
    v-else-if="disabled"
    :disabled="disabled"
    :class="['animated-gradient text-white relative h-12 px-4 py-3 rounded-md duration-200 flex items-center gap-2', className]"
    @click="click"
  >
    <slot name="icon" />
    <slot />
  </button>
  <button
    v-else-if="outline"
    :class="['text-white gradient-text btn-outline relative h-12 px-4 py-3 rounded-md duration-200 border-gradient outline flex items-center gap-2', className]"
    @click="click"
  >
    <slot name="icon" />
    <slot />
  </button>
  <button
    v-else
    :class="['animated-gradient text-white relative h-12 px-4 py-3 rounded-md duration-200 flex items-center gap-2', className]"
    @click="click"
  >
    <slot name="icon" />
    <slot />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
	className?: string;
	href?: string;
	click?: (event: MouseEvent) => void;
	disabled?: boolean;
	outline?: boolean;
}

const { className, href, click, disabled, outline } =
	defineProps<ButtonProps>();
</script>
