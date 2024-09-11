<template>
  <button
    v-if="href && !outline && !disabled"
    :href="href"
    :class="['bg-gradient-to-l from-blue-500 to-blue-700 text-white relative h-12 px-4 py-3 rounded-md duration-200', className]"
    @click="click"
  >
    <a
      target="_blank"
      :href="href"
      :class="['w-full h-full absolute top-0 flex flex-col items-center justify-center left-0', outline ? 'gradient-text' : '']"
    >
      <slot />
    </a>
  </button>
  <button
    v-else-if="href && outline"
    :class="['text-white gradient-text relative h-12 px-4 py-3 rounded-md duration-200 border-gradient outline', className]"
    @click="click"
  >
    <a
      target="_blank"
      :href="href"
      :class="['w-full h-full absolute top-0 flex flex-col items-center justify-center left-0', outline ? 'gradient-text' : '']"
    >
      <slot />
    </a>
  </button>
  <button
    v-else-if="disabled"
    :disabled="disabled"
    :class="['bg-gradient-to-l from-blue-500 to-blue-700 text-white relative h-12 px-4 py-3 rounded-md duration-200', className]"
    @click="click"
  >
    <slot />
  </button>
  <button
    v-else-if="outline"
    :class="['text-white gradient-text relative h-12 px-4 py-3 rounded-md duration-200 border-gradient outline', className]"
    @click="click"
  >
    <slot />
  </button>
  <button
    v-else
    :class="['bg-gradient-to-l from-blue-500 to-blue-700 text-white relative h-12 px-4 py-3 rounded-md duration-200', className]"
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
	outline?: boolean;
}

const { className, href, click, disabled, outline } =
	defineProps<ButtonProps>();
</script>
