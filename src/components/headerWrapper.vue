<template>
  <button
    :class="[
      'items-center justify-center flex transition-all hover:bg-neutral-300',
      'dark:hover:bg-grey-700 duration-200 rounded-lg group size-10',
      className
    ]"
    @click="toggleNavBar"
  >
    <Menu v-if="!isNavBarOpen" class="text-neutral-800 dark:text-grey-100 group-hover:text-blue-500 transition-all duration-200" />
    <X v-else class="text-neutral-800 dark:text-grey-100 duration-200 group-hover:text-blue-500 transition-all" />
  </button>
  <transition
    @leave="(_el, done) => motions['navBarAnimation'].leave(done)"
  >
    <aside
      v-if="isNavBarOpen"
      v-motion="`navBarAnimation`"
      :initial="{ x: 640, transition: { type: 'tween', duration: 500 } }"
      :enter="{ x: 0, transition: { type: 'tween', duration: 500 } }"
      :leave="{ x: 640, transition: { type: 'tween', duration: 500 } }"
      :class="[
        'w-full dark:bg-grey-900/60 backdrop-blur-md absolute h-[calc(100vh_-_80px)] z-50',
        'top-20 right-0 md:hidden border-l dark:border-[#333] border-neutral-400 text-white flex justify-around flex-col sm:w-72'
      ]"
    >
      <ul className="flex flex-col justify-between items-center h-3/5">
        <li>
          <a
            class="py-2 px-3 duration-200 dark:hover:bg-grey-700 rounded-lg cursor-pointer text-neutral-800 dark:text-grey-100 hover:text-blue-500 text-lg"
            href="#history"
          >
            {{ $t('Sobre mim') }}
          </a>
        </li>
        <li>
          <a
            class="py-2 px-3 duration-200 dark:hover:bg-grey-700 rounded-lg cursor-pointer text-neutral-800 dark:text-grey-100 hover:text-blue-500 text-lg"
            href="#projects"
          >
            {{ $t('Projetos') }}
          </a>
        </li>
        <li>
          <a
            class="py-2 px-3 duration-200 dark:hover:bg-grey-700 rounded-lg cursor-pointer text-neutral-800 dark:text-grey-100 hover:text-blue-500 text-lg"
            href="#contact"
          >
            {{ $t('Contato') }}
          </a>
        </li>
      </ul>
      <div class="flex items-center w-full justify-center gap-x-2">
        <navLinks size="xl" />
      </div>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";
import { useMotions } from "@vueuse/motion";
import navLinks from "./navLinks.vue";
import { Menu, X } from "lucide-vue-next";

const { className } = defineProps({
	className: { type: String, default: null },
});

const isNavBarOpen = ref<boolean>(false);
const motions = useMotions();

const toggleNavBar = (): void => {
	isNavBarOpen.value = !isNavBarOpen.value;
};
</script>
