<script setup>
defineProps({
  content: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <button>{{ content }}</button>
</template>
