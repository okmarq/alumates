<script setup>
defineProps({
  placeholder: {
    type: String,
  },
  type: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <input :type="type" :placeholder="placeholder" :value="modelValue" v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
    class="py-3 px-4 rounded-full w-full placeholder-[#999999] text-[#151522] appearance-none block focus:outline-none" />
</template>
