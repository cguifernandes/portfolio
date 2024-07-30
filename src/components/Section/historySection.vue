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
    class="flex flex-col w-full gap-y-6 min-h-screen justify-center items-center"
  >
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-xl xl:text-2xl text-white">
        {{ $t('Sobre mim') }}
      </h1>
      <p className="text-white/50 text-sm xl:text-base">
        {{ $t('Minha carreira no desenvolvimento') }}
      </p>
    </div>
    <div class="glass-effect lg:max-h-[calc(100vh_-_200px)] w-full flex justify-between flex-col lg:flex-row items-center rounded-md">
      <div class="flex p-5 lg:pl-5 w-full flex-col gap-y-2 flex-1 lg:mr-5">
        <div class="flex flex-col max-w-2xl xl:max-w-4xl gap-y-4 mx-auto">
          <div class="flex gap-x-4 items-center justify-center lg:justify-normal">
            <img :src="MyImage" alt="My Image" class="xl:size-12 size-10 object-cover rounded-full" />
            <h1 class="text-lg xl:text-xl font-montserrat text-white">Quem é <span class="gradient-text">Guilherme Fernandes?</span></h1>
          </div>
          <p class="text-white/50 text-center lg:text-justify text-sm xl:text-base">Programador há 3 anos. Comecei em uma escola técnica e iniciei minha carreira com automação de sistemas para Telegram usando Node.js. Após um ano nessa empresa, me tornei freelancer. Atualmente, curso análise e desenvolvimento de sistemas para aprimorar meus conhecimentos. Já trabalhei em projetos full-time com Next.js, desenvolvi extensões para Google Chrome e bots para Discord e Telegram.</p>
          <div class="flex flex-col gap-y-2 items-center lg:items-start">
            <ButtonComponent href="/curriculo.pdf" class="max-w-72 w-full hover:max-w-80">
              {{ $t('Currículo') }}
            </ButtonComponent>
            <ButtonComponent 
              href="https://api.whatsapp.com/send?phone=5511932368610&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20pelo%20seu%20portf%C3%B3lio" 
              :outline="true" 
              class="max-w-72 w-full hover:max-w-80"
            >
              {{ $t('Entre em contato comigo') }}
            </ButtonComponent>
          </div>
        </div>
        <div class="flex flex-col gap-y-2">
          <h1 class="text-lg xl:text-xl font-montserrat text-white">Serviços</h1>
          <div class="flex gap-x-3">
            <SkillsCard
              name="Desenvolvimento de site"
              class="h-full"
              descripion="Crio websites personalizados que destacam sua presença online, utilizando as mais recentes tecnologias e design responsivo para sites atraentes, rápidos e fáceis de navegar. Transformo suas ideias em experiências digitais únicas para conquistar seus clientes."
              description-class="line-clamp-5"
              /> 
            <SkillsCard
              name="Automação de tarefas"
              class="h-full"
              descripion="Ofereço soluções de automação de tarefas para otimizar seu tempo e aumentar a produtividade, automatizando processos repetitivos e complexos. Assim, você pode focar nas atividades mais importantes e melhorar a eficiência operacional."
              description-class="line-clamp-5"
              />
            <SkillsCard
              name="Design de sites"
              class="h-full"
              descripion="Crio designs de sites atraentes e funcionais que refletem sua marca, com foco na experiência do usuário. Desenvolvo layouts intuitivos e impactantes que facilitam a navegação e engajam visitantes, transformando suas ideias em um design que destaca sua presença online."
              description-class="line-clamp-5"
              />
          </div>
        </div>
      </div>
      <div class="lg:gap-y-3 max-h-[calc(100vh_-_200px)] gap-y-2 flex flex-col p-3 border-t-2 lg:border-l-2 border-grey-500 lg:max-w-md xl:max-w-xl w-full">
        <h1 class="text-lg xl:text-xl font-montserrat text-white">Stacks desenvolvidas</h1>
          <Swiper
          :speed="200"
          :autoplay="true"
          :slides-per-view="3"
          :direction="'horizontal'"
          :space-between="8"
          :breakpoints="{
            1024: {
              direction: 'vertical',
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 5,
              direction: 'vertical'
            }
          }"
          class="min-h-full max-w-full"
        >
          <SwiperSlide
            v-for="(skill, index) in skills"
            :key="index"
          >
            <SkillsCard
              :name="skill.name"
              :descripion="skill.description"
              description-class="line-clamp-4 lg:line-clamp-3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MyImage from "../../assets/image.png";
import ButtonComponent from "../buttonComponent.vue";
import SkillsCard from "../skillsCard.vue";
import { skills } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>