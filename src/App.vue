<script setup lang="ts">
import HeaderBar from './components/Layout/headerBar.vue'
import AboutSection from './components/Section/aboutSection.vue'
import HistorySection from './components/Section/historySection.vue'
import ProjectsSection from './components/Section/projectsSection.vue'
import SkillsSection from './components/Section/skillsSection.vue'
</script>

<template>
  <HeaderBar />
  <main>
    <AboutSection />
    <HistorySection />
    <SkillsSection />
    <ProjectsSection />
  </main>
</template>
