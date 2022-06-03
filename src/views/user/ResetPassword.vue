<script setup>
import VInput from "@/components/VInput.vue"
import FormTitle from "@/components/FormTitle.vue"
import VButton from "@/components/VButton.vue"
import axios from "axios"
import { reactive } from "vue"

function onSubmit() {
  axios.post(
    'https://alumates.herokuapp.com/api/login',
    payload
  )
    .then(function (response) {
      console.log('Response', response)
      // route to user list
    })
    .catch(function (error) {
      console.error('Error', error)
    })
}
const payload = reactive({
  email: ''
})
</script>

<template>
  <div class="text-[#151522]">
    <form @submit.prevent="onSubmit" class="space-y-5">
      <fieldset>
        <legend class="text-left mb-8">
          <FormTitle title="Reset password." class="font-bold text-xl pr-56" />
        </legend>

        <div>
          <label for="email" class="invisible">Email address</label>
          <VInput v-model.trim="payload.email" id="email" placeholder="Email address" class="bg-[#F1F1F1]" />
        </div>

        <small class="mt-5 mb-8 inline-block">We’ll send a reset link to your email address</small>
      </fieldset>

      <VButton content="Reset password" class="bg-[#22151F] text-white py-3 w-full rounded-full" />
    </form>

    <div class="text-center text-sm mt-7">Remember password? <router-link class="text-[#6979F8]"
        :to="{ name: 'Login' }">
        Login
      </router-link>
    </div>
  </div>
</template>
