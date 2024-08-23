
<template>
  <footer class="flex items-center justify-evenly h-32 md:px-20 border-t dark:border-[#333] border-neutral-400 flex-col transition-all duration-200 md:justify-between md:h-20 md:flex-row">
    <div class="space-x-4 flex items-center">
      <NavLinks size="xl" />
    </div>
    <p class="text-neutral-800 transition-all duration-300 dark:text-neutral-200 xl:text-base text-sm">
      {{ $t('Feito por') }}
      <a
        class="gradient-text xl:text-base text-sm"
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
