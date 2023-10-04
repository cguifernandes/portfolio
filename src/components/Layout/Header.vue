<template>
  <header class="flex justify-center h-24 bg-grey-700 backdrop-blur fixed w-full z-50">
    <div class="flex items-center max-w-[1540px] w-full justify-between mx-8 md:mx-6 lg:mx-10">
      <img alt="Logo" src="../../assets/reduceLogo.svg" class="w-[70px]" />
      <ul class="cursor-pointer hidden lg:gap-x-2 md:flex items-center justify-around">
        <li class="duration-200 hover:bg-grey-500 py-2 px-3 rounded-lg text-grey-100 hover:text-blue-500">Sobre</li>
        <li class="duration-200 hover:bg-grey-500 py-2 px-3 rounded-lg text-grey-100 hover:text-blue-500">História</li>
        <li class="duration-200 hover:bg-grey-500 py-2 px-3 rounded-lg text-grey-100 hover:text-blue-500">Habilidades</li>
        <li class="duration-200 hover:bg-grey-500 py-2 px-3 rounded-lg text-grey-100 hover:text-blue-500">Projetos</li>
      </ul>
      <div class="gap-x-2 md:flex gap-y-2 hidden lg:px-0 items-center justify-between flex-row xl:gap-x-8 lg:gap-x-4">
        <div class="text-white py-2 px-3 cursor-pointer rounded-lg duration-200 hover:bg-grey-500 flex items-center justify-between border-0 md:text-grey-100 md:hover:text-blue-500 lg:hover:text-white lg:text-white lg:px-4 lg:py-3 lg:w-48 lg:border lg:border-grey-300">
          <span class="hidden lg:inline">Inglês</span>
          <Languages :size="22" />
        </div>
        <div class="bg-grey-300 h-[45px] w-px lg:ml-3"></div>
        <div class="flex items-center justify-between text-white lg:gap-x-2">
          <a class="py-2 px-3 hover:bg-grey-500 duration-200 rounded-lg cursor-pointer text-grey-100 hover:text-blue-500">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
          </a>
          <a class="py-2 px-3 hover:bg-grey-500 duration-200 rounded-lg cursor-pointer text-grey-100 hover:text-blue-500">
            <font-awesome-icon icon="fa-brands fa-github" size="xl" />
          </a>
          <a class="py-2 px-3 hover:bg-grey-500 duration-200 rounded-lg cursor-pointer text-grey-100 hover:text-blue-500">
            <font-awesome-icon icon="fa-brands fa-instagram" size="xl" />
          </a>
          <a class="py-2 px-3 hover:bg-grey-500 duration-200 rounded-lg cursor-pointer text-grey-100 hover:text-blue-500">
            <font-awesome-icon icon="fa-solid fa-envelope" size="xl" />
          </a>
        </div>
      </div>
      <HeaderWrapper class-name="md:hidden" />
    </div>
  </header>
</template>

<script lang="ts">
  import { Languages } from 'lucide-vue-next';
  import HeaderWrapper from '../HeaderWrapper.vue';
  
  export default {
    name: "HeaderBar",
    components: { Languages, HeaderWrapper }
  }
</script>
