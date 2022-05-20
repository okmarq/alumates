<script setup>
defineProps({
  class: {
    type: String,
  },
  icon: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="{{ class }}">
    <div class="{{ class }}">{{ icon }}</div>
    <div class="{{ class }}">{{ content }}</div>
  </div>
</template>
