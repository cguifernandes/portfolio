<template>
  <section
    id="history"
    class="flex flex-col gap-y-6 min-h-screen justify-center items-center"
  >
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-2xl text-white">
        {{ $t('História') }}
      </h1>
      <p className="text-white/50">
        {{ $t('História na área de programação') }}
      </p>
    </div>
    <div class="bg-gradient-to-tl from-grey-800 shadow-lg to-grey-700 max-w-[590px] mx-6 lg:max-w-[1100px] flex flex-col-reverse justify-between items-center rounded-md lg:flex-row">
      <div class="gap-y-6 m-auto lg:w-[520px] p-8 flex flex-col items-center lg:items-start">
        <p class="text-center text-white lg:text-left">
          {{ $t('text') }}
        </p>
        <ButtonComponent class-name="w-72 hover:w-80">
          {{ $t('Currículo') }}
        </ButtonComponent>
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
import ButtonComponent from '../buttonComponent.vue'
</script>
