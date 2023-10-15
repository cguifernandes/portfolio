<template>
  <section class="h-[calc(100vh_-_80px)] relative flex items-center justify-between bg-grey-900">
    <div class="blur-top" />
    <div class="flex items-center justify-center w-full px-10 z-[5] lg:px-24 lg:justify-between">
      <div class="text-white text-center text-xl w-full space-y-4 lg:text-left lg:w-[700px]">
        <p>
          Olá, eu sou <span class="text-blue-500">Guilherme Fernandes</span>, e tenho uma paixão por criar sites
          e explorar novas tecnologias. Quando não estou codando, aproveito o tempo para ler livros, assistir séries e estudar um pouco mais.
        </p>
        <button class="bg-blue-600 flex justify-between items-center px-4 py-3 w-72 rounded-md duration-200 hover:bg-blue-700">
          <span class="hidden lg:inline text-lg">Inglês</span>
          <Languages :size="22" />
        </button>
      </div>
      <div class="hidden lg:inline">
        <Vue3Lottie
          :animation-data="MainAnimation"
          :loop="false"
          class="lg:w-[460px] xl:w-[520px] 2xl:w-[580px] !m-0"
        />
      </div>
    </div>
    <div class="blur-bottom" />
    <div class="w-full flex items-center justify-center absolute bottom-6">
      <a class="bg-blue-600 p-3 rounded-full animate-bounce cursor-pointer duration-200 hover:bg-blue-700">
        <ChevronDown
          color="#fff"
          :size="28"
        />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import { Languages, ChevronDown } from 'lucide-vue-next'
import MainAnimation from '../../assets/animation.json'

</script>
