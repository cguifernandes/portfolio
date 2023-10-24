<template>
  <form class="flex flex-col gap-y-6 w-4/12">
    <input
      class="px-4 py-3 w-full bg-grey-700 text-white duration-200 placeholder:text-white/50 rounded-md focus:bg-grey-600"
      placeholder="Nome"
      type="text"
    >
    <input
      class="px-4 py-3 w-full bg-grey-700 text-white duration-200 placeholder:text-white/50 rounded-md focus:bg-grey-600"
      placeholder="E-mail"
      type="text"
    >
    <textarea
      class="px-4 py-3 w-full h-32 bg-grey-700 text-white duration-200 placeholder:text-white/50 rounded-md focus:bg-grey-600"
      placeholder="Mensagem"
    />
    <ButtonComponent>
      Enviar
    </ButtonComponent>
  </form>
</template>

<script setup lang="ts">
import ButtonComponent from './buttonComponent.vue'
</script>
