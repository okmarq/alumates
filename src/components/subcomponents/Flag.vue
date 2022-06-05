<script setup>
defineProps({
  flag_name: {
    type: String,
    required: true,
  },
  flag_img: {
    type: String,
    required: true,
    validator: propValue => {
      const hasImagesDirectory = propValue.indexOf('@/assets/images/flags/') > -1
      const isSVG = propValue.endsWith('.svg')
      const isPNG = propValue.endsWith('.png')
      const isJPEG = propValue.endsWith('.jpeg') || propValue.endsWith('.jpg')
      const hasValidExtension = isSVG || isPNG || isJPEG

      return hasImagesDirectory && hasValidExtension
    }
  },
})
</script>
<template>
  <div
    class="flex items-center px-3 py-2 m-1 cursor-pointer transition hover:scale-95 hover:bg-gray-100 hover:rounded-lg text-sm">
    <img :src="flag_img" alt="flag" class="pr-2" />

    <p>{{ flag_name }}</p>
  </div>
</template>
