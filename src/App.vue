<script setup lang="ts">
import HeaderBar from './components/Layout/headerBar.vue'
import AboutSection from './components/Section/aboutSection.vue'
import HistorySection from './components/Section/historySection.vue'
import SkillsSection from './components/Section/skillsSection.vue'
</script>

<template>
  <HeaderBar />
  <main class="pt-20">
    <AboutSection />
    <HistorySection />
    <SkillsSection />
  </main>
</template>
