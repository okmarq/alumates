<script setup>
defineProps({
  step_name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="ring-2 ring-[#93009C] rounded-full w-9 h-9 font-bold flex items-center justify-center"
  >
    {{ step_name }}
  </div>
</template>
