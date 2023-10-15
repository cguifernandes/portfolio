<template>
  <section class="h-[calc(100vh_-_80px)] bg-gradient-to-b relative flex items-center justify-between from-grey-900 to-grey-700">
    <div class="blur-top" />
    <div class="flex items-center justify-center w-full px-10 z-[5] lg:px-24 lg:justify-between">
      <div class="text-white text-center text-xl w-full lg:text-left lg:w-[700px]">
        <p>
          Olá, eu sou <span class="text-blue-500">Guilherme Fernandes</span>, e tenho uma paixão por criar sites
          e explorar novas tecnologias. Quando não estou codando, aproveito o tempo para ler livros, assistir séries e estudar um pouco mais.
        </p>
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
      <a class="bg-blue-500 p-3 rounded-full animate-bounce cursor-pointer">
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
import MainAnimation from '../../assets/animation.json'
import { ChevronDown } from 'lucide-vue-next'
</script>
