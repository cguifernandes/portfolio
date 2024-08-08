<template>
  <section
    id="history"
    v-motion
    :initial="{
      opacity: 0,
      y: -40,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
    }"
    class="flex flex-col max-h-[calc(100vh_-_200px)] w-full gap-y-6 h-screen min-h-[828px] pt-20 lg:pt-20 justify-center items-center"
  >
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-xl xl:text-2xl text-white">
        {{ $t('Sobre mim') }}
      </h1>
      <p className="text-white/50 text-sm xl:text-base">
        {{ $t('Minha carreira no desenvolvimento') }}
      </p>
    </div>
    <div class="glass-effect max-h-full w-full flex justify-between flex-col lg:flex-row items-center rounded-md">
      <div class="flex p-3 lg:pl-5 w-full flex-col gap-y-4 flex-1">
        <div class="flex flex-col max-w-2xl mx-auto lg:m-0 xl:max-w-4xl gap-y-4 pr-3">
          <div class="flex gap-x-4 items-center justify-center lg:justify-normal">
            <img :src="MyImage" alt="My Image" class="xl:size-12 size-10 object-cover rounded-full" />
            <h1 class="text-lg xl:text-xl font-montserrat text-white">{{ $t('Quem é ') }}<span class="gradient-text">Guilherme Fernandes?</span></h1>
          </div>
          <p class="text-white/50 text-center lg:text-left text-sm xl:text-base">
            {{ $t('text-about-me') }}
            <br>
            {{ $t('Para mais informações:') }} <a class="gradient-text" href="/curriculo.pdf">{{ $t('Currículo') }}</a>
          </p>
        </div>
        <div class="flex flex-col gap-y-2">
          <h1 class="text-lg xl:text-xl font-montserrat text-white">{{ $t('Serviços') }}</h1>
          <div class="flex flex-wrap max-h-36 gap-3 overflow-x-auto pr-2 custom-scrollbar">
            <SkillsCard
              :is-traslate="true"
              name="Desenvolvimento de site"
              class="flex-1 h-fit min-w-72"
              descripion="Crio websites personalizados que destacam sua presença online, utilizando as mais recentes tecnologias e design responsivo para sites atraentes, rápidos e fáceis de navegar. Transformo suas ideias em experiências digitais únicas para conquistar seus clientes."
              description-class="line-clamp-4 md:line-clamp-5 xl:line-clamp-4"
            /> 
            <SkillsCard
              :is-traslate="true"
              name="Automação de tarefas"
              class="flex-1 h-fit min-w-72"
              descripion="Ofereço soluções de automação de tarefas para otimizar seu tempo e aumentar a produtividade, automatizando processos repetitivos e complexos. Assim, você pode focar nas atividades mais importantes e melhorar a eficiência operacional."
              description-class="line-clamp-4 md:line-clamp-5 xl:line-clamp-4"
            />
            <SkillsCard
              :is-traslate="true"
              name="Design de sites"
              class="flex-1 h-fit min-w-72"
              descripion="Crio designs de sites atraentes e funcionais que refletem sua marca, com foco na experiência do usuário. Desenvolvo layouts intuitivos e impactantes que facilitam a navegação e engajam visitantes, transformando suas ideias em um design que destaca sua presença online."
              description-class="line-clamp-4 md:line-clamp-5 xl:line-clamp-4"
            />
          </div>
        </div>
      </div>
      <div class="lg:gap-y-3 gap-y-2 max-h-full overflow-y-auto flex flex-col p-3 border-t-2 lg:border-t-0 lg:border-l-2 border-grey-500 lg:max-w-md xl:max-w-xl w-full">
        <h1 class="text-lg xl:text-xl font-montserrat text-white">{{ $t('Stacks desenvolvidas') }}</h1>
          <div class="flex lg:flex-col gap-2 custom-scrollbar pb-2 lg:pr-2 overflow-auto max-h-full">
            <SkillsCard
              v-for="(skill, index) in skills"
              :key="index"
              :name="skill.name"
              :descripion="skill.name"
              description-class="line-clamp-3 lg:line-clamp-3"
            />
          </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MyImage from "../../assets/image.png";
import SkillsCard from "../skillsCard.vue";
import { skills } from "../utils/constants";
import "swiper/css";
</script>