
<template>
  <footer class="flex items-center justify-evenly h-32 md:px-20 bg-gradient-to-tl from-grey-800 to-grey-900 flex-col md:justify-between md:h-20 md:flex-row">
    <div class="space-x-4">
      <NavLinks size="xl" />
    </div>
    <p class="text-white">
      {{ $t('Feito por') }}
      <a
        class="gradient-text"
        href="https://www.linkedin.com/in/guilherme-fernandes-6b1353243/"
      >
        Guilherme Fernandes
      </a>
    </p>
  </footer>
</template>

<script setup lang="ts">
import NavLinks from "../navLinks.vue";
</script>
