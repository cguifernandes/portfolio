
<template>
  <section
    id="skills"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
    }"
    class="flex flex-col gap-y-6 min-h-screen justify-center items-center"
  >
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-montserrat text-2xl text-white">
        {{ $t('Habilidades') }}
      </h1>
      <p className="text-white/50">
        {{ $t('Habilidades desenvolvidas') }}
      </p>
    </div>
    <div
      class="flex flex-wrap gap-8 justify-center w-11/12"
      @mouseenter="hoveredCard = true"
      @mouseleave="hoveredCard = false"
    >
      <SkillsCard
        v-for="(skill, index) in skills"
        :key="index"
        :name="skill.name"
        :descripion="skill.description"
        :hovered-card="hoveredCard"
      >
        <img
          class="w-28 hidden sm:inline"
          :src="skill.icon"
        >
      </SkillsCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillsCard from '../skillsCard.vue'
import { skills } from '../utils/constants'
import { ref } from 'vue'

const hoveredCard = ref<boolean>(false)
</script>
