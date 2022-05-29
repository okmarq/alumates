<script setup>
import VButtonStore from "@/components/VButtonStore.vue"
import { useStore } from 'vuex'

const store = useStore()
const button = {
  playstore: {
    content1: "Get on",
    content2: "Playstore"
  },
  appstore: {
    content1: "Get on",
    content2: "App Store"
  }
}
const popupData = {
  noConnect: {
    body: "To connect with this user and the rest of your Alumni and friends, download the Alumates App"
  }
}
</script>

<template>
  <div class="absolute -top-5 w-full h-full">
    <div class="backdrop-blur grid place-items-center h-screen">
      <div class="w-80 h-64 rounded-xl bg-white shadow-md flex flex-col justify-between gap-10 py-7 mx-auto relative">
        <img src="../../assets/images/close.svg" alt="arrow"
          class="hover:scale-110 transition-all cursor-pointer absolute top-0 right-0 py-2 px-4" />

        <div class="px-10">
          <p class="font-semibold text-sm leading-relaxed tracking-widest mt-4">{{ popupData.noConnect.body }}
          </p>
        </div>

        <div class="flex items-center justify-center gap-4 text-white">
          <VButtonStore v-bind="button.playstore">
            <img src="../../assets/images/icons/playstore_white.svg" alt="icon">
          </VButtonStore>

          <VButtonStore v-bind="button.appstore">
            <img src="../../assets/images/icons/apple_white.svg" alt="icon">
          </VButtonStore>
        </div>
      </div>
    </div>
  </div>
</template>
