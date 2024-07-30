<script setup lang="ts">
import FooterBar from "./components/Layout/footerBar.vue";
import HeaderBar from "./components/Layout/headerBar.vue";
import AboutSection from "./components/Section/aboutSection.vue";
import ContactSection from "./components/Section/contactSection.vue";
import HistorySection from "./components/Section/historySection.vue";
import ProjectsSection from "./components/Section/projectsSection.vue";
</script>

<template>
  <HeaderBar />
  <main class="flex flex-col max-w-[1740px] mx-auto px-4 md:px-6 lg:px-10">
    <AboutSection />
    <HistorySection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <FooterBar />
</template>
