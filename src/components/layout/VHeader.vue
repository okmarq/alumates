<script setup>
import Flag from "@/components/Flag.vue"
import { ref, watchEffect } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const store = useStore()
const route = useRouter()
const flags = {
  nigeria: {
    flag_img: "../../assets/images/flags/nigerianflag.svg",
    flag_name: "Nigeria"
  },
  ghana: {
    flag_img: "../../assets/images/flags/ghanaianflag.svg",
    flag_name: "Ghana"
  },
  france: {
    flag_img: "../../assets/images/flags/frenchflag.svg",
    flag_name: "France"
  }
}
let selectedFlag = {
  src: "../../assets/images/flags/frenchflag.svg",
  id: 'frenchflag'
}
const selectCountry = ref(true)
const page = ref(false)

watchEffect(() => {
  switch (route.currentRoute.value.name) {
    case "Register":
    case "Login":
    case "Login":
    case "NewPassword":
    case "Register":
    case "ResetPassword":
      page.value = false
      break;

    default:
      page.value = true
      break;
  }
  return page.value
})
</script>

<template>
  <div class="flex justify-between items-center mt-5">
    <div class="flex gap-5">
      <p class="font-bold">Alumates</p>

      <div class="relative" v-if="page">
        <div class="flex items-center cursor-pointer" @click='selectCountry = !selectCountry'>
          <img v-bind="selectedFlag" alt="flag" class="pr-2" />

          <img src="../../assets/images/arrowdown.svg" alt="arrow" class="hover:scale-110 transition-all"
            id="select_country" />
        </div>

        <div class="shadow-md bg-white rounded-lg w-40 absolute top-6 -left-4" :class="{ 'hidden': selectCountry }"
          id="country_dropdown">
          <Flag v-bind="flags.nigeria" :class="{ 'rounded-lg bg-gray-200': true }" />

          <Flag v-bind="flags.ghana" />

          <Flag v-bind="flags.france" />
        </div>
      </div>
    </div>

    <div @click="store.commit('toggleSidebar')" id="hamburger" v-if="page">
      <img src="../../assets/images/hamburger.svg" alt="flag" class="pr-2 hover:scale-110 cursor-pointer transition-all" />
    </div>
  </div>
</template>
