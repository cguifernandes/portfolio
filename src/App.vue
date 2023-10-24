<script setup lang="ts">
import FooterBar from './components/Layout/footerBar.vue'
import HeaderBar from './components/Layout/headerBar.vue'
import AboutSection from './components/Section/aboutSection.vue'
import ContactSection from './components/Section/contactSection.vue'
import HistorySection from './components/Section/historySection.vue'
import ProjectsSection from './components/Section/projectsSection.vue'
import SkillsSection from './components/Section/skillsSection.vue'
</script>

<template>
  <HeaderBar />
  <main class="flex flex-col gap-y-24 ">
    <AboutSection />
    <HistorySection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <FooterBar />
</template>
