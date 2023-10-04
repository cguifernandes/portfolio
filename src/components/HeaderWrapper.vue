<template>
  <button 
    @click="showNavBar"
    :class="['items-center justify-center flex flex-col gap-y-[6px] w-[24px] h-[24px] cursor-pointer ', props.className]"
  >
    <div class="w-[25px] h-[2px] bg-white"></div>
    <div class="w-[25px] h-[2px] bg-white"></div>
    <div class="w-[25px] h-[2px] bg-white"></div>
  </button>
  <div 
    ref="navBar" 
    class="w-72 absolute h-[calc(100vh_-_96px)] bg-grey-700 top-24 right-0"
  >
    {{ isActiveNavBar }}
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const props = defineProps({ className: String });
  const navBar = ref<HTMLElement | null>(null);
  const isActiveNavBar = ref<boolean>(false)

  const showNavBar = () => {
    isActiveNavBar.value = !isActiveNavBar.value;
  }

</script>