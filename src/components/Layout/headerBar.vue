<template>
  <header class="flex justify-center h-20 border-b dark:border-[#333] border-neutral-400 bg-neutral-200 md:bg-neutral-200/60 dark:bg-grey-900 dark:md:bg-grey-900/60 md:backdrop-blur fixed w-full z-10 top-0 transition-all duration-200">
    <div class="flex items-center max-w-[1740px] w-full justify-between px-4 md:px-6 lg:px-10">
      <a href="#about">
        <img
          alt="Logo"
          src="../../assets/reduceLogo.svg"
          class="w-[60px]"
        >

      </a>
      <ul class="cursor-pointer hidden lg:gap-x-2 md:flex items-center justify-around">
        <a
          class="py-2 px-3 relative duration-200 text-neutral-800 hover:bg-neutral-300 dark:hover:bg-grey-700 rounded-lg dark:text-grey-100 hover:text-blue-500"
          href="#history"
        >
          {{ $t('Sobre mim') }}
        </a>
        <a
          class="py-2 px-3 relative duration-200 text-neutral-800 hover:bg-neutral-300 dark:hover:bg-grey-700 rounded-lg dark:text-grey-100 hover:text-blue-500"
          href="#projects"
        >
          {{ $t('Projetos') }}
        </a>
        <a
          class="py-2 px-3 relative duration-200 text-neutral-800 hover:bg-neutral-300 dark:hover:bg-grey-700 rounded-lg dark:text-grey-100 hover:text-blue-500"
          href="#contact"
        >
          {{ $t('Contato') }}
        </a>
      </ul>
      <div class="gap-x-2 md:flex gap-y-2 hidden lg:px-0 items-center justify-between flex-row xl:gap-x-8 lg:gap-x-4">
        <div class="flex items-center justify-between lg:gap-x-2">
          <NavLinks size="xl" />
        </div>
      </div>
      <HeaderWrapper class-name="md:hidden" />
    </div>
  </header>
</template>

<script setup lang="ts">
import NavLinks from "../navLinks.vue";
import HeaderWrapper from "../headerWrapper.vue";
</script>
