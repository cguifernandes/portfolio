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
    class="flex flex-col gap-y-6 h-screen min-h-[828px] justify-center items-center"
  >
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-xl xl:text-2xl text-neutral-800 dark:text-neutral-200 transition-all duration-200e">
        {{ $t('Projetos') }}
      </h1>
      <p className="text-neutral-500 text-sm xl:text-base">
        {{ $t('Projetos pessoais') }}
      </p>
    </div>
    <div class="w-full">
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
        }"
        class="!pb-6"
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
            :additionalLink="project.additionalLink"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="blur-bottom-projects" />
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { projects } from "../utils/constants";
import "swiper/css";
import "swiper/css/scrollbar";
import ProjectCard from "../projectCard.vue";
</script>
