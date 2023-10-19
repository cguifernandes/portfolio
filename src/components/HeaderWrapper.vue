<template>
  <button
    v-if="!isNavBarOpen"
    :class="[
      'items-center justify-center flex flex-col w-[45px] h-[41px] gap-y-[5px]',
      'cursor-pointer py-2 px-3 hover:bg-grey-700 duration-200 rounded-lg group',
      className
    ]"
    @click="toggleNavBar"
  >
    <div
      v-motion="iconAnimation"
      class="w-5 h-[2px] bg-grey-100 duration-200 group-hover:bg-blue-500"
    />
    <div
      v-motion="iconAnimation"
      class="w-5 h-[2px] bg-grey-100 duration-200 group-hover:bg-blue-500"
    />
    <div
      v-motion="iconAnimation"
      class="w-5 h-[2px] bg-grey-100 duration-200 group-hover:bg-blue-500"
    />
  </button>
  <button
    v-else
    :class="[
      'items-center justify-center flex flex-col w-[45px] h-[41px] gap-y-[5px]',
      'cursor-pointer py-2 px-3 hover:bg-grey-700 duration-200 rounded-lg group',
      className
    ]"
    @click="toggleNavBar"
  >
    <span
      v-motion="iconAnimation"
      class="text-grey-100 text-xl duration-200 group-hover:text-blue-500"
    >X</span>
  </button>
  <transition
    @leave="(_el, done) => motions['navBarAnimation'].leave(done)"
  >
    <aside
      v-if="isNavBarOpen"
      v-motion="`navBarAnimation`"
      :initial="{ x: 640, transition: { type: 'keyframes', duration: 500 } }"
      :enter="{ x: 0, transition: { type: 'keyframes', duration: 500 } }"
      :leave="{ x: 640, transition: { type: 'keyframes', duration: 500 } }"
      :class="[
        'w-full bg-grey-900/60 backdrop-blur-md absolute h-[calc(100vh_-_96px)] z-50',
        'top-24 right-0 md:hidden text-white flex justify-around flex-col sm:w-72'
      ]"
    >
      <ul className="flex flex-col justify-between items-center h-3/5">
        <li>
          <a
            class="py-2 px-3 duration-200 hover:bg-grey-700 rounded-lg text-grey-100 hover:text-blue-500 text-lg"
            href="#about"
          >
            {{ $t('Sobre') }}
          </a>
        </li>
        <li>
          <a
            class="py-2 px-3 duration-200 hover:bg-grey-700 rounded-lg text-grey-100 hover:text-blue-500 text-lg"
            href="#history"
          >
            {{ $t('História') }}
          </a>
        </li>
        <li>
          <a
            class="py-2 px-3 duration-200 hover:bg-grey-700 rounded-lg text-grey-100 hover:text-blue-500 text-lg"
            href="#skills"
          >
            {{ $t('Habilidades') }}
          </a>
        </li>
        <li>
          <a
            class="py-2 px-3 duration-200 hover:bg-grey-700 rounded-lg text-grey-100 hover:text-blue-500 text-lg"
            href="#projects"
          >
            {{ $t('Projetos') }}
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
import { ref } from 'vue'
import { MotionVariants, useMotions } from '@vueuse/motion'
import navLinks from './navLinks.vue'

const { className } = defineProps({ className: { type: String, default: null } })
const isNavBarOpen = ref<boolean>(false)
const motions = useMotions()

const toggleNavBar = (): void => {
  isNavBarOpen.value = !isNavBarOpen.value
}

const iconAnimation: MotionVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 200
    }
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 200
    }
  }
}

</script>
