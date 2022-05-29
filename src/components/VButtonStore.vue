<script setup>
defineProps({
  content1: {
    type: String,
    required: true,
  },
  content2: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <button class="flex items-center gap-2 bg-gray-900 px-5 py-2 rounded-full">
    <slot></slot>

    <span class="flex flex-col items-start">
      <small class="text-xs">{{ content1 }}</small>
      <small class="text-xs font-semibold">{{ content2 }}</small>
    </span>
  </button>
</template>
