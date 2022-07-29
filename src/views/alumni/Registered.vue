<script setup>
import VButtonStore from "@/components/VButtonStore.vue"
import { useStore } from 'vuex'
import { useRouter } from "vue-router"

const store = useStore()
const route = useRouter()
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
  alumniJoined: {
    title: "Way to go!",
    body: "You’re now part of your Alumni network. Download the Alumates App to say hello",
  }
}

function gotoList() {
  route.push({ path: '/list' })
}
</script>

<template>
  <div class="absolute -top-5 w-full h-full">
    <div class="backdrop-blur grid place-items-center h-screen">
      <div class="w-80 h-64 rounded-xl bg-white shadow-md flex flex-col justify-between gap-10 py-7 mx-auto relative border">
        <img src="../../assets/images/close.svg" alt="arrow"
          class="hover:scale-110 transition-all cursor-pointer absolute top-0 right-0 py-2 px-4" @click="gotoList" />

        <div class="px-10">
          <h2 class="font-semibold text-xl mb-4">{{ popupData.alumniJoined.title }}</h2>

          <p class="font-semibold text-sm">{{ popupData.alumniJoined.body }}</p>
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
