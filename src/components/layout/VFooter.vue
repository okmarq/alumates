<script setup>
import { ref, watchEffect } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const store = useStore()
const route = useRouter()
const selectCountry = ref(true)
const page = ref(false)

watchEffect(() => {
  switch (route.currentRoute.value.name) {
    case "Register":
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
  <div class="bg-[#151522] flex flex-col gap-8 text-white mt-10 px-10 pt-12 pb-4 text-center" v-if="page">
    <div class="flex flex-col gap-4">
      <div class="text-sm font-semibold">
        <p>Download our the Alumates App from the respective stores to connect, socialise and create business
          engagements with your classmates and schoolmates</p>
      </div>

      <div class="flex items-center justify-center gap-4 text-[#151522]">
        <button class="flex items-center gap-2 bg-white px-5 py-2 rounded-full">
          <img src="../../assets/images/icons/playstore.svg" alt="playstore" />

          <span class="flex flex-col items-start">
            <small class="text-xs">Get on</small>
            <small class="text-xs font-semibold">Playstore</small>
          </span>
        </button>

        <button class="flex items-center gap-2 bg-white px-5 py-2 rounded-full">
          <img src="../../assets/images/icons/apple.svg" alt="apple" />

          <span class="flex flex-col items-start">
            <small class="text-xs">Get on</small>
            <small class="text-xs font-semibold">App Store</small>
          </span>
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <div class="font-semibold">Connect with us</div>

      <div class="mx-auto">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-[#E0138E] rounded-full"></div>

          <small>Instagram</small>
        </div>

        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-[#1031DE] rounded-full"></div>

          <small>Facebook</small>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <div class="font-semibold">Come find us</div>

      <div class="flex flex-col">
        <small>H23-1</small>
        <small>white house, Brickcity</small>
        <small>Kubwa, Abuja. Nigeria.</small>
        <small><a href="mailto:info@alumates.com">info@alumates.com</a></small>
      </div>
    </div>

    <small class="mt-4">All rights reserved</small>
  </div>
</template>
