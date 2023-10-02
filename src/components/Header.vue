<script setup lang="ts">
  import { Languages } from 'lucide-vue-next';
</script>

<template>
  <header class="flex justify-center h-[10vh] bg-grey-600 backdrop-blur fixed w-full z-50 md:bg-grey-600/80">
    <div class="flex items-center max-w-[1540px] w-full justify-between mx-6 lg:mx-10">
      <img alt="Logo" class="w-[200px] xl:w-[250px]" />
      <ul class="text-white cursor-pointer space-x-2 flex items-center justify-around">
        <li class="duration-200 hover:bg-grey-700 py-2 px-3 rounded-lg">Sobre</li>
        <li class="duration-200 hover:bg-grey-700 py-2 px-3 rounded-lg">História</li>
        <li class="duration-200 hover:bg-grey-700 py-2 px-3 rounded-lg">Habilidades</li>
        <li class="duration-200 hover:bg-grey-700 py-2 px-3 rounded-lg">Projetos</li>
      </ul>
      <div class="gap-x-2 flex items-center justify-between">
        <div class="text-white w-48 border border-grey-100 px-4 py-3 rounded-lg duration-200 hover:bg-grey-700 flex items-center justify-between">
          <span>Inglês</span>
          <Languages :size="22" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
