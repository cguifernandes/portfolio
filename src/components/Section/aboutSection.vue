<template>
  <section
    id="about"
    class="h-screen w-full pt-20 relative flex items-center justify-between bg-grey-900"
  >
    <div class="blur-top-about" />
    <div class="flex flex-col overflow-hidden lg:flex-row items-center justify-center w-full z-[5] lg:justify-between">
      <div
        v-motion
        :initial="{
          opacity: 0,
          x: -40,
        }"
        :enter="{
          opacity: 1,
          x: 0,
        }"
        class="text-white flex flex-col text-center text-xl w-full gap-y-4 lg:text-left lg:w-[50%]"
      >
        <p>
          {{ $t('Olá, eu sou,') }} <span class="gradient-text">Guilherme Fernandes</span> {{ $t('e tenho uma paixão por criar sites e explorar novas tecnologias. Quando não estou codando, aproveito o tempo para ler livros, assistir séries e estudar um pouco mais.') }}
        </p>
        <ButtonComponent
          :click="handlerClick"
          class-name="w-72 m-auto lg:m-0 flex justify-between items-center hover:w-80"
        >
          <span class="text-lg">{{ $t('Inglês') }}</span>
          <Languages :size="22" />
        </ButtonComponent>
      </div>
      <div
        v-motion-slide-right
        class="hidden lg:inline lg:w-[40%] xl:w-[45%] 2xl:w-[50%]"
      >
        <Vue3Lottie
          :animation-data="MainAnimation"
          class="!m-0"
        />
      </div>
    </div>
    <div class="blur-bottom-about" />
    <div class="w-full flex items-center justify-center absolute bottom-6">
      <a
        href="#history"
        class="bg-gradient-to-l from-blue-500 to-blue-700 p-3 rounded-full animate-bounce cursor-pointer duration-200"
      >
        <ChevronDown
          color="#fff"
          :size="28"
        />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import { Languages, ChevronDown } from "lucide-vue-next";
import MainAnimation from "../../assets/animation.json";
import ButtonComponent from "../buttonComponent.vue";
import { i18n } from "../utils/i18n";

const handlerClick = (): void => {
	if (i18n.global.locale === "pt") {
		i18n.global.locale = "en";
	} else {
		i18n.global.locale = "pt";
	}
};
</script>