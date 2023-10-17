<template>
  <section
    id="history"
    class="flex flex-col gap-y-6 min-h-screen justify-center items-center"
  >
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-2xl text-white">
        História
      </h1>
      <p className="text-white/50">
        História na área de programação
      </p>
    </div>
    <div class="bg-gradient-to-tl from-grey-800 shadow-lg to-grey-700 max-w-[590px] mx-6 lg:max-w-[1100px] flex flex-col-reverse justify-between items-center rounded-md lg:flex-row">
      <div class="space-y-6 m-auto lg:w-[520px] p-8">
        <p class="text-white">
          Tive minha primeira experiência com programação em 2020, durante o meu ensino médio.
          Desde então, mergulhei de cabeça nesse mundo fascinante e me tornei um entusiasta incansável da arte de programar.
          Atualmente, atuo como freelancer e me dedico à criação de projetos pessoais com o intuito de aprimorar minha expertise na área.
        </p>
        <button class="bg-gradient-to-l from-blue-500 to-blue-800 text-white w-full px-4 py-3 rounded-md duration-200">
          Currículo
        </button>
      </div>
      <img
        :class="[
          'object-cover h-[460px] rounded-t-md w-full lg:w-[520px] md:rounded-md',
          'lg:my-0 lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-md lg:rounded-br-md'
        ]"
        :src="MyImage"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import MyImage from '../../assets/image.png'
</script>
