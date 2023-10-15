<template>
  <header class="flex justify-center h-20 bg-grey-900/60 backdrop-blur fixed w-full z-10 top-0">
    <div class="flex items-center max-w-[1540px] w-full justify-between mx-8 md:mx-6 lg:mx-10">
      <img
        alt="Logo"
        src="../../assets/reduceLogo.svg"
        class="w-[60px]"
      >
      <ul class="cursor-pointer hidden lg:gap-x-2 md:flex items-center justify-around">
        <li class="py-2 px-3 duration-200 hover:bg-grey-700 rounded-lg text-grey-100 hover:text-blue-500">
          Sobre
        </li>
        <li class="py-2 px-3 duration-200 hover:bg-grey-700 rounded-lg text-grey-100 hover:text-blue-500">
          História
        </li>
        <li class="py-2 px-3 duration-200 hover:bg-grey-700 rounded-lg text-grey-100 hover:text-blue-500">
          Habilidades
        </li>
        <li class="py-2 px-3 duration-200 hover:bg-grey-700 rounded-lg text-grey-100 hover:text-blue-500">
          Projetos
        </li>
      </ul>
      <div class="gap-x-2 md:flex gap-y-2 hidden lg:px-0 items-center justify-between flex-row xl:gap-x-8 lg:gap-x-4">
        <div class="flex items-center justify-between text-white lg:gap-x-2">
          <NavLinks size="xl" />
        </div>
      </div>
      <HeaderWrapper class-name="md:hidden" />
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderWrapper from '../headerWrapper.vue'
import NavLinks from '../navLinks.vue'
</script>
