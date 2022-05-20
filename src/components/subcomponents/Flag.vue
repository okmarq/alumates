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
  <div class="flex items-center px-3 py-2">
    <img :src="flag_img" alt="flag" class="pr-2" />

    <p>{{ flag_name }}</p>
  </div>
</template>
