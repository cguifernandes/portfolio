<template>
  <section
    id="projects"
    class="flex flex-col gap-y-6 min-h-screen justify-center items-center mb-20 scroll-pt-20"
  >
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-2xl text-white">
        Projetos
      </h1>
      <p className="text-white/50">
        Projetos pessoais
      </p>
    </div>
    <div class="w-11/12">
      <Swiper
        :speed="200"
        :autoplay="true"
        :slides-per-view="1"
        :space-between="20"
        :scrollbar="true"
        :breakpoints="{
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }"
        class="!pb-12"
      >
        <SwiperSlide
          v-for="(project, index) in projects"
          :key="index"
        >
          <ProjectCard
            :description="project.description"
            :image="project.image"
            :website="project.website"
            :name="project.name"
            :skills="project.skills"
            :repo="project.repo"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { projects } from '../utils/constants'
import 'swiper/css'
import 'swiper/css/scrollbar'
import ProjectCard from '../projectCard.vue'
</script>
