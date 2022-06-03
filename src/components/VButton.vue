<script setup>
defineProps({
  content: {
    type: String,
    required: true,
  },
  classname: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <button :class="classname">{{ content }}</button>
</template>
