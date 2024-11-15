<template>
  <div class="glass-effect w-full shadow-lg rounded-xl flex flex-col overflow-hidden">
    <div 
      v-if="isLoading" 
      class="w-full h-64 bg-gray-200 animate-pulse"
    />
    <img
      v-show="!isLoading"
      :src="image[0]"
      :alt="description"
      class="w-full h-64 object-cover"
      @load="handleImageLoad"
      @error="handleImageError"
    >
    <div class="flex flex-col flex-1 gap-y-6 p-6 justify-center">
      <div class="flex flex-col gap-y-1">
        <div class="flex flex-col gap-y-1">
          <h1 class="text-neutral-800 transition-all duration-300 dark:text-neutral-200 text-2xl uppercase font-montserrat">
            {{ name }}
          </h1>
          <span 
            :title="$t(description)"
            class="text-neutral-500 max-h-24 h-full overflow-hidden line-clamp-3 text-sm xl:text-base"
          >
            {{ $t(description) }}
          </span>
        </div>
        <div class="flex flex-col gap-y-1">
          <h1 class="text-neutral-800 transition-all duration-300 dark:text-neutral-200 text-base xl:text-lg font-montserrat">{{ $t('Stacks utilizadas') }}</h1>
          <div class="flex items-center gap-1 flex-wrap">
            <span
              v-for="(skill, index) in skills"
              :key="index"
              class="py-1 px-3 rounded-3xl glass-effect-light text-neutral-800 transition-all duration-300 dark:text-neutral-200 text-xs cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
        <div v-if="figmaAuthor || figmaLink" class="flex flex-col gap-y-1">
          <h1 class="text-neutral-800 transition-all duration-300 dark:text-neutral-200 font-montserrat text-base xl:text-lg">Links</h1>
          <span v-if="figmaAuthor" class="text-neutral-500 text-sm xl:text-base">
            {{ $t('Autor do') }} 
            <a :href="figmaAuthor" class="gradient-text text-sm xl:text-base">
             Figma
            </a>
          </span>
          <span v-if="figmaLink" class="text-neutral-500 text-sm xl:text-base">
            {{ $t('Projeto no') }}
            <a :href="figmaLink" class="gradient-text text-sm xl:text-base">
             Figma
            </a>
          </span>
        </div>
      </div>
      <div class="flex w-full flex-col gap-6">
        <ButtonComponent
          v-if="additionalLink" 
          class="w-full min-w-48"
          :href="additionalLink"
        >
          <template #icon>
            <ExternalLink :size="20" />
          </template> 
          {{ $t('Link adicional') }}
        </ButtonComponent>
        <ButtonComponent
          v-if="repo" 
          class="w-full min-w-48"
          :href="repo"
        >
          <template #icon>
            <ExternalLink :size="20" />
          </template>
          {{ $t('Repositório') }}
        </ButtonComponent>
        <ButtonComponent
          v-if="website" 
          :outline="true"
          class="w-full min-w-48"
          :href="website"
        >
          {{ $t('Site') }}
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next";
import ButtonComponent from "./buttonComponent.vue";
import { ref } from "vue";

const isLoading = ref(true);

interface ProjectProps {
	website?: string;
	description: string;
	image: string | string[];
	name: string;
	skills: string[];
	repo?: string;
	figmaAuthor?: string;
	figmaLink?: string;
	additionalLink?: string;
}

const handleImageLoad = () => {
	isLoading.value = false;
};

const handleImageError = () => {
	isLoading.value = false;
	console.error("Erro ao carregar a imagem!");
};

const {
	description,
	image,
	name,
	repo,
	skills,
	website,
	additionalLink,
	figmaAuthor,
	figmaLink,
} = defineProps<ProjectProps>();
</script>