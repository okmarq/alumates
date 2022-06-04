<script setup>
import Flag from "@/components/Flag.vue"
import { reactive, ref, watchEffect } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import ApiService from "@/services/ApiService"

const store = useStore()
const route = useRouter()
const selectCountry = ref(true)
const page = ref(false)
const flags = {
  nigeria: {
    img: "../../assets/images/flags/ng.svg",
    name: "Nigeria"
  },
  ghana: {
    img: "../../assets/images/flags/Gha.svg",
    name: "Ghana"
  },
  france: {
    img: "../../assets/images/flags/Fra.svg",
    name: "France"
  }
}
const selectedFlag = {
  src: "../../assets/images/flags/Fra.svg",
  id: 'Fra'
}
const countries = reactive({})
const selectedCountry = {
  src: "../../assets/images/flags/Fra.svg",
  id: 'Fra'
}

watchEffect(() => {
  ApiService.getCountries()
    .then(function (response) {
      if (response.status === 200) {
        response.data.forEach(element => {
          countries[element.name] = {
            id: element.id,
            name: element.name,
            img: `../../assets/images/flags/${element.short_name}`
          }
        })
        console.log(countries)
      }
    })
    .catch(function (error) {
      console.error('Error', error)
    })
})
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
      <p class="font-bold text-[#333333]">Alumates</p>

      <div class="relative z-50" v-if="page">
        <div class="flex items-center cursor-pointer" @click='selectCountry = !selectCountry'>
          <img v-bind="selectedFlag" alt="flag" class="pr-2" />

          <img src="../../assets/images/arrowdown.svg" alt="arrow" class="hover:scale-110 transition-all"
            id="select_country" />
        </div>

        <div class="overflow-hidden">
          <div class="shadow-md bg-white rounded-lg w-40 h-56 overflow-y-scroll absolute top-6 -left-4" :class="{ 'hidden': selectCountry }"
            id="country_dropdown">
            <Flag v-bind="flags.nigeria" :class="{ 'rounded-lg bg-gray-200': true }" />

            <Flag v-bind="flags.ghana" />

            <Flag v-bind="flags.france" />

            <Flag v-for="country in countries" v-bind="country" />
          </div>
        </div>
      </div>
    </div>

    <div @click="store.commit('toggleSidebar')" id="hamburger" v-if="page">
      <img src="../../assets/images/hamburger.svg" alt="hamburger"
        class="pr-2 hover:scale-110 cursor-pointer transition-all" />
    </div>
  </div>
</template>
