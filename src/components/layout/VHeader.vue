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
function getFlgImgUrl(image) {
  let images = require.context('@/assets/images/flags/', false, /\.svg$/)
  return images('./' + image + ".svg")
}
const countries = reactive({})
const countryId = reactive({
  id: 129
})
const selectedFlag = reactive({
  src: require("@/assets/images/flags/ng.svg"),
  id: 'ng'
})
function selectedCountry(data) {
  countries[countryId.id].class = ''
  let country = countries[data]
  country.class = 'rounded-lg bg-[#E4E4E4]'
  countryId.id = country.id
  selectedFlag.src = country.img
  selectedFlag.id = country.short_name
}
watchEffect(() => {
  ApiService.getCountries()
    .then(function (response) {
      if (response.status === 200) {
        response.data.forEach(element => {
          countries[element.id] = {
            id: element.id,
            name: element.name,
            short_name: element.short_name,
            img: getFlgImgUrl(element.short_name),
            class: ''
          }
        })
      }
    })
    .catch(function (error) {
      console.error('Error', error)
    })
})
const states = reactive({})
watchEffect(() => {
  ApiService.getStates(countryId.id).then(function (response) {
    console.log(response.data)
    // if (response.status === 200) {
    //   response.data.forEach(element => {
    //     states[element.id] = {
    //       id: element.id,
    //       name: element.name,
    //       img: getFlgImgUrl(element.short_name)
    //     }
    //   })
    // }
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

          <img src="@/assets/images/arrowdown.svg" alt="arrow" class="hover:scale-110 transition-all"
            id="select_country" />
        </div>

        <div class="overflow-hidden">
          <div class="shadow-md bg-white rounded-lg w-52 h-56 overflow-y-scroll absolute top-6 -left-4"
            :class="{ 'hidden': selectCountry }" id="country_dropdown">
            <Flag v-for="country in countries" v-bind="country" :key="country.id"
              @click="selectedCountry(country.id)" />
          </div>
        </div>
      </div>
    </div>

    <div @click="store.commit('toggleSidebar')" id="hamburger" v-if="page">
      <img src="@/assets/images/hamburger.svg" alt="hamburger"
        class="pr-2 hover:scale-110 cursor-pointer transition-all" />
    </div>
  </div>
</template>
