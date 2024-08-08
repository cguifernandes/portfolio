<template>
  <div class="glass-effect h-[600px] xl:h-[450px] shadow-lg rounded-xl p-4 flex flex-col xl:flex-row gap-x-4 overflow-hidden">
    <img
      :src="image[0]"
      :alt="description"
      class="xl:w-2/4 xl:min-h-full xl:min-w-[50%] 2xl:min-w-[320px] min-h-[120px] max-h-[200px] xl:max-h-full overflow-hidden w-full h-full object-cover rounded-t-md xl:rounded-l-md xl:rounded-tr-none"
    >
    <div class="flex flex-col flex-1 gap-y-3 pt-4 justify-center">
      <div class="flex flex-col gap-y-1">
        <h1 class="text-white text-lg font-montserrat">
          {{ name }}
        </h1>
        <span 
          :title="$t(description)"
          class="text-white/50 max-h-24 h-full overflow-hidden line-clamp-3 xl:line-clamp-4 text-sm xl:text-base"
        >
          {{ $t(description) }}
        </span>
      </div>
      <div class="flex flex-col gap-y-1">
        <h1 class="text-white text-base xl:text-lg font-montserrat">{{ $t('Stacks utilizadas') }}</h1>
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
        <h1 class="text-white font-montserrat text-base xl:text-lg">Links</h1>
        <span v-if="figmaAuthor" class="text-white/50 text-sm xl:text-base">
          {{ $t('Autor do') }} 
          <a :href="figmaAuthor" class="gradient-text text-sm xl:text-base">
           Figma
          </a>
        </span>
        <span v-if="figmaLink" class="text-white/50 text-sm xl:text-base">
          {{ $t('Projeto no') }}
          <a :href="figmaLink" class="gradient-text text-sm xl:text-base">
           Figma
          </a>
        </span>
      </div>
      <div class="flex flex-col gap-y-2">
        <ButtonComponent
          class="w-full"
          :href="repo"
        >
          {{ $t('Repositório') }}
        </ButtonComponent>
        <ButtonComponent
          v-if="website" 
          :outline="true"
          class="w-full"
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