<template>
  <button 
    @click="toggleTheme"
    class="fixed md:right-12 md:bottom-12 right-4 bottom-4 rounded-full size-12 flex items-center justify-center glass-effect"
  >
    <Moon 
      v-if="!isDarkTheme"
      class="text-neutral-800"
      icon="fa-solid fa-moon"
      :size="20" 
    />
    <Sun 
      v-else
      class="text-grey-100"
      icon="fa-solid fa-sun"
      :size="20" 
    />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Moon, Sun } from "lucide-vue-next";

const isDarkTheme = ref(false);

const toggleTheme = () => {
	const html = document.querySelector("html");

	if (!html) return;

	if (html.classList.contains("dark")) {
		html.classList.remove("dark");
		html.classList.add("light");
		localStorage.setItem("theme", "light");
		html.style.backgroundColor = "transparent";
		html.style.backgroundColor = "#e6e6e6";
		isDarkTheme.value = false;
	} else {
		html.classList.remove("light");
		html.classList.add("dark");
		localStorage.setItem("theme", "dark");
		html.style.backgroundColor = "transparent";
		html.style.backgroundColor = "#151515";
		isDarkTheme.value = true;
	}
};

onMounted(() => {
	const html = document.querySelector("html");
	isDarkTheme.value = html?.classList.contains("dark") || false;
});
</script>
