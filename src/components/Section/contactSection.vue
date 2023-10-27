<template>
  <section
    id="contact"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
    }"
    class="flex flex-col gap-y-6 h-screen justify-center items-center"
  >
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-2xl text-white">
        {{ $t("Contato") }}
      </h1>
      <p className="text-white/50">
        {{ $t("Entre em contato comigo") }}
      </p>
    </div>
    <div class="flex items-center justify-around w-full">
      <div
        class="hidden lg:block lg:w-[320px] xl:w-[400px] 2xl:w-[460px]"
      >
        <Vue3Lottie
          :animation-data="SendAnimation"
          class="!m-0"
        />
      </div>
      <FormContact />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import SendAnimation from '../../assets/send.json'
import FormContact from '../formContact.vue'
</script>
