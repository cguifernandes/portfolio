<template>
  <div class="glass-effect h-[600px] xl:h-[450px] shadow-lg rounded-xl p-4 flex flex-col xl:flex-row gap-x-4 overflow-hidden">
    <img
      :src="image[0]"
      :alt="description"
      class="min-w-[480px] xl:w-2/4 xl:min-h-full xl:min-w-[50%] 2xl:min-w-[320px] min-h-[120px] max-h-[200px] xl:max-h-full overflow-hidden w-full h-full object-cover rounded-t-md xl:rounded-l-md xl:rounded-tr-none"
    >
    <div class="flex flex-col flex-1 gap-y-3 pt-4 justify-center">
      <div class="flex flex-col gap-y-1">
        <h1 class="text-white text-2xl font-montserrat">
          {{ name }}
        </h1>
        <span 
          class="text-white/50 max-h-24 h-full overflow-hidden line-clamp-3 xl:line-clamp-4"
        >
          {{ $t(description) }}
        </span>
      </div>
      <div class="flex flex-col gap-y-1">
        <h1 class="text-white font-montserrat">Stacks utilizadas</h1>
        <div class="flex items-center gap-1 flex-wrap">
          <span
            v-for="(skill, index) in skills"
            :key="index"
            class="py-2 px-3 glass-effect-light text-white rounded-md text-xs duration-200 cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      <div v-if="figmaAuthor || figmaLink" class="flex flex-col gap-y-1">
        <h1 class="text-white font-montserrat">Links</h1>
        <span v-if="figmaAuthor" class="text-white/50 text-sm">
          Autor do 
          <a :href="figmaAuthor" class="text-white underline">
           Figma
          </a>
        </span>
        <span v-if="figmaLink" class="text-white/50 text-sm">
          Projeto no 
          <a :href="figmaLink" class="text-white underline">
           Figma
          </a>
        </span>
      </div>
      <div class="flex flex-col gap-y-1">
        <ButtonComponent
          title="Link para redirecionar ao repositório no GitHub"
          class-name="w-full"
          :href="repo"
        >
          {{ $t('Repositório') }}
        </ButtonComponent>
        <ButtonComponent
          v-if="website" 
          class-name="w-full"
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
	website?: string;
	description: string;
	image: string | string[];
	name: string;
	skills: string[];
	repo: string;
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