<template>
  <section
    id="history"
    class="flex flex-col gap-y-6 min-h-screen justify-center items-center mb-20"
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
      <div class="gap-y-6 m-auto lg:w-[520px] p-8 flex flex-col items-center lg:items-start">
        <p class="text-center text-white lg:text-left">
          No ano de 2020, quando estava no ensino médio, tive a oportunidade de dar os primeiros passos na minha jornada de programação, fazendo um curso técnico em informática.
          Depois que terminei o ensino médio, entrei para a faculdade de Análise e Desenvolvimento de Sistemas (UNIP), onde estou atualmente estudando.
          No meu emprego atual, trabalho no desenvolvimento de software utilizando as tecnologias Node.js e Vue.js.
          Tenho um grande interesse em aprender programação por conta própria e sou apaixonado por criar coisas novas. Pretendo continuar evoluindo a partir deste ponto em diante.
        </p>
        <ButtonComponent class-name="w-72 hover:w-80">
          Currículo
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
