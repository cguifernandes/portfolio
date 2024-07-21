<template>
  <section
    id="projects"
    v-motion
    :initial="{
      opacity: 0,
      y: -40,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
    }"
    class="flex flex-col gap-y-6 h-screen justify-center items-center"
  >
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-2xl text-white">
        {{ $t('Projetos') }}
      </h1>
      <p className="text-white/50">
        {{ $t('Projetos pessoais') }}
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
          },
          1280: {
            slidesPerView: 3,
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
            :figmaAuthor="project.figmaAuthor"
            :figmaLink="project.figmaLink"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { projects } from "../utils/constants";
import "swiper/css";
import "swiper/css/scrollbar";
import ProjectCard from "../projectCard.vue";
</script>
