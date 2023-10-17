
<template>
  <section class="flex flex-col gap-y-6 min-h-screen justify-center items-center">
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-2xl text-white">
        Habilidades
      </h1>
      <p className="text-white/50">
        Habilidades desenvolvidas
      </p>
    </div>
    <div class="flex flex-wrap gap-8 justify-center max-w-[1200px] w-11/12">
      <SkillsCard
        v-for="(skill, index) in skills"
        :key="index"
        :name="skill.name"
        :descripion="skill.description"
      >
        <img
          class="w-28"
          :src="skill.icon"
        >
      </SkillsCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillsCard from '../skillsCard.vue'
import { skills } from '../utils/constants'
</script>
