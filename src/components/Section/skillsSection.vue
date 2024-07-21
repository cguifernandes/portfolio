
<template>
  <section
    id="skills"
    class="flex flex-col gap-y-6 min-h-screen justify-center items-center"
  >
    <div 
      v-motion
      :initial="{
        opacity: 0,
        y: -40,
      }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
      }" 
      className="flex flex-col items-center justify-center"
      >
      <h1 className="font-montserrat text-2xl text-white">
        {{ $t('Habilidades') }}
      </h1>
      <p className="text-white/50">
        {{ $t('Habilidades desenvolvidas') }}
      </p>
    </div>
    <div class="flex flex-wrap gap-8 justify-center w-11/12 relative">
      <div class="blur-top-skills" />
      <SkillsCard
        v-for="(skill, index) in skills"
        :key="index"
        :name="skill.name"
        :animation-delay="index * 100"
        :descripion="skill.description"
      >
        <img
          class="w-28 hidden sm:inline"
          :src="skill.icon"
        >
      </SkillsCard>
      <div class="blur-bottom-skills" />
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillsCard from "../skillsCard.vue";
import { skills } from "../utils/constants";
</script>
