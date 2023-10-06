<template>
  <button
    :class="[
      'items-center justify-center flex flex-col w-[45px] h-[41px] gap-y-[5px]',
      'cursor-pointer py-2 px-3 hover:bg-grey-500 duration-200 rounded-lg group',
      className
    ]"
    @click="toggleNavBar"
  >
    <div class="w-5 h-[2px] bg-grey-100 duration-200 group-hover:bg-blue-500" />
    <div class="w-5 h-[2px] bg-grey-100 duration-200 group-hover:bg-blue-500" />
    <div class="w-5 h-[2px] bg-grey-100 duration-200 group-hover:bg-blue-500" />
  </button>
  <transition
    @leave="(_el, done) => motions['navBarAnimation'].leave(done)"
  >
    <aside
      v-if="isNavBarOpen"
      v-motion="`navBarAnimation`"
      :initial="{ x: 290, transition: {type: 'keyframes'} }"
      :enter="{ x: 0, transition: {type: 'keyframes'} }"
      :leave="{ x: 290, transition: {type: 'keyframes'} }"
      class="w-full bg-grey-700/50 backdrop-blur absolute h-[calc(100vh_-_96px)] top-24 right-0 md:hidden text-white flex justify-around flex-col sm:w-72"
    >
      <ul className="flex flex-col justify-between items-center h-3/5">
        <li>
          <a
            :class="['navBar-text', 'text-lg']"
            href="#about"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            :class="['navBar-text', 'text-lg']"
            href="#history"
          >
            História
          </a>
        </li>
        <li>
          <a
            :class="['navBar-text', 'text-lg']"
            href="#skills"
          >
            Habilidades
          </a>
        </li>
        <li>
          <a
            :class="['navBar-text', 'text-lg']"
            href="#projects"
          >
            Projetos
          </a>
        </li>
      </ul>
      <div class="flex items-center w-full justify-center gap-x-4">
        <navLinks size="xl" />
      </div>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMotions } from '@vueuse/motion'
import navLinks from './navLinks.vue'

const { className } = defineProps({ className: { type: String, default: null } })
const isNavBarOpen = ref<boolean>(false)
const motions = useMotions()

const toggleNavBar = (): void => {
  isNavBarOpen.value = !isNavBarOpen.value
}
</script>
