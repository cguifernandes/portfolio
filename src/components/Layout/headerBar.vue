<template>
  <header class="flex justify-center h-20 bg-grey-900 backdrop-blur fixed w-full z-10 top-0">
    <div class="flex items-center max-w-[1540px] w-full justify-between mx-8 md:mx-6 lg:mx-10">
      <img
        alt="Logo"
        src="../../assets/reduceLogo.svg"
        class="w-[60px]"
      >
      <ul class="cursor-pointer hidden lg:gap-x-2 md:flex items-center justify-around">
        <li class="navBar-text">
          Sobre
        </li>
        <li class="navBar-text">
          História
        </li>
        <li class="navBar-text">
          Habilidades
        </li>
        <li class="navBar-text">
          Projetos
        </li>
      </ul>
      <div class="gap-x-2 md:flex gap-y-2 hidden lg:px-0 items-center justify-between flex-row xl:gap-x-8 lg:gap-x-4">
        <div
          :class="[
            'text-white py-2 px-3 cursor-pointer rounded-lg duration-200 hover:bg-grey-700 flex items-center group md:hover:text-blue-600',
            'md:text-grey-100 lg:px-4 lg:py-3 lg:w-48 lg:border lg:border-grey-300 lg:hover:text-white lg:text-white justify-between border-0'
          ]"
        >
          <span class="hidden lg:inline">Inglês</span>
          <Languages :size="22" />
        </div>
        <div class="bg-grey-300 h-[45px] w-px lg:ml-3" />
        <div class="flex items-center justify-between text-white lg:gap-x-2">
          <NavLinks size="xl" />
        </div>
      </div>
      <HeaderWrapper class-name="md:hidden" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { Languages } from 'lucide-vue-next'
import HeaderWrapper from '../headerWrapper.vue'
import NavLinks from '../navLinks.vue'
</script>
