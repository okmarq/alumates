<script setup>
defineProps({
  badge_name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex items-center gap-1">
    <img src="../../assets/images/tick.svg" alt="tick" />

    <small class="font-bold truncate text-xs">{{ badge_name }}</small>
  </div>
</template>
