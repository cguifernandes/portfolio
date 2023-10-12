<template>
  <section class="h-[calc(100vh_-_80px)] bg-gradient-to-b relative flex items-center justify-between from-grey-900 to-grey-700">
    <div class="blur-top" />
    <div class="flex justify-between items-center w-full z-[5]">
      <div class="text-white text-center flex flex-col text-2xl w-full px-6 lg:w-auto lg:text-left lg:text-xl xl:text-2xl lg:pl-20 xl:pl-24 2xl:pl-[125px]">
        <p>
          Meu nome é Guilherme Fernandes<br>
          Eu desenvolvo coisas para a Internet<br>
          Atualmente trabalho como <span class="text-blue-500">Desenvolvimento Web</span>
        </p>
      </div>
      <div class="hidden lg:inline">
        <Vue3Lottie
          :animation-data="MainAnimation"
          :loop="false"
          class="lg:w-[460px] xl:w-[520px] 2xl:w-[680px] !m-0"
        />
      </div>
    </div>
    <div class="blur-bottom" />
  </section>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import MainAnimation from '../../assets/animation.json'

</script>
