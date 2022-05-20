<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h3 class="font-bold text-xl">{{ title }}</h3>
</template>
