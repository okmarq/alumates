<script setup>
defineProps({
  placeholder: {
    type: String,
  },
  type: {
    type: String,
  },
});
</script>

<template>
  <input :type="type" :placeholder="placeholder" />
</template>
