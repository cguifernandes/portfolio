<template>
  <div class="bg-gradient-to-tl from-grey-800 shadow-lg to-grey-700 min-h-[680px] md:min-h-[620px] rounded-md flex flex-col">
    <a
      :href="website"
      target="_blank"
    >
      <img
        :src="image"
        :alt="description"
        class="w-full h-60 md:h-52 rounded-t-md object-cover duration-200 hover:opacity-50"
      >
    </a>
    <div class="flex flex-col flex-1 gap-y-6 px-6 py-8 justify-center">
      <div class="flex flex-col items-center gap-y-2">
        <h1 class="text-white text-2xl font-montserrat">
          {{ name }}
        </h1>
        <p class="text-white/50 text-center">
          {{ $t(description) }}
        </p>
        <span v-if="figmaAuthor" class="text-white/50 text-sm text-center">
          Link para o 
          <a :href="figmaAuthor" class="text-blue-500 underline">
           autor do Figma
          </a>
        </span>
        <span v-if="figmaLink" class="text-white/50 text-sm text-center">
          Link para o 
          <a :href="figmaLink" class="text-blue-500 underline">
           projeto no Figma
          </a>
        </span>
      </div>
      <div class="flex items-center gap-2 justify-center flex-wrap">
        <span
          v-for="(skill, index) in skills"
          :key="index"
          class="py-2 px-4 bg-grey-500 text-white rounded-md text-xs duration-200 cursor-default hover:bg-grey-400"
        >
          {{ skill }}
        </span>
      </div>
      <div class="flex flex-col justify-around items-center gap-y-6 px-6">
        <ButtonComponent
          title="Link para redirecionar ao repositório no GitHub"
          class-name="w-full md:w-4/5"
          :href="repo"
        >
          {{ $t('Repositório') }}
        </ButtonComponent>
        <ButtonComponent
          v-if="website" 
          class-name="w-full md:w-4/5"
          :href="website"
        >
          {{ $t('Site') }}
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from "./buttonComponent.vue";

interface ProjectProps {
	website: string;
	description: string;
	image: string;
	name: string;
	skills: string[];
	repo: string | undefined;
	figmaAuthor?: string;
	figmaLink?: string;
}

const {
	description,
	image,
	name,
	repo,
	skills,
	website,
	figmaAuthor,
	figmaLink,
} = defineProps<ProjectProps>();
</script>
