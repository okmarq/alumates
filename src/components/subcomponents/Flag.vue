<script setup>
defineProps({
  flag_name: {
    type: String,
    required: true,
  },
  flag_img: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div
    class="flex items-center px-3 py-2 m-1 cursor-pointer transition hover:scale-95 hover:bg-gray-100 hover:rounded-lg text-sm">
    <img :src="flag_img" alt="flag" class="pr-2" />

    <p>{{ flag_name }}</p>
  </div>
</template>
