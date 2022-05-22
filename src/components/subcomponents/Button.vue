<script setup>
defineProps({
  type: {
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
  <button :type="type">{{ content }}</button>
</template>
