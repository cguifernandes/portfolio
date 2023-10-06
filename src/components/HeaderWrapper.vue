<template>
  <button 
    @click="toggleNavBar"
    :class="['items-center justify-center flex flex-col w-[45px] h-[41px] gap-y-[5px] cursor-pointer py-2 px-3 hover:bg-grey-500 duration-200 rounded-lg group', props.className]"
  >
    <div class="w-5 h-[2px] bg-grey-100 duration-200 group-hover:bg-blue-500"></div>
    <div class="w-5 h-[2px] bg-grey-100 duration-200 group-hover:bg-blue-500"></div>
    <div class="w-5 h-[2px] bg-grey-100 duration-200 group-hover:bg-blue-500"></div>
  </button>
  <aside 
    v-if="isNavBarOpen"
    v-motion
    :initial="{translateX: 220, transition: { type: 'keyframes' } }"
    :enter="{ translateX: 0, transition: { type: 'keyframes' } }"
    class="w-72 absolute h-[calc(100vh_-_96px)] bg-grey-700 top-24 right-0 flex md:hidden text-white"
  >
    {{ isNavBarOpen }}
  </aside>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const props = defineProps({ className: String });
  const isNavBarOpen = ref<boolean>(false);

  const toggleNavBar = async () => {
    isNavBarOpen.value = !isNavBarOpen.value;
  };

</script>