<template>
  <section
    id="contact"
    v-motion
    :initial="{
      opacity: 0,
      y: -40,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
    }"
    class="flex flex-col gap-y-6 h-screen min-h-[828px] justify-center items-center"
  >
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-xl xl:text-2xl text-neutral-800 dark:text-neutral-200 transition-all duration-200">
        {{ $t("Contato") }}
      </h1>
      <p className="text-neutral-500 text-sm xl:text-base">
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
import { Vue3Lottie } from "vue3-lottie";
import SendAnimation from "../../assets/send.json";
import FormContact from "../formContact.vue";
</script>
