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
  password: ''
})
</script>

<template>
  <div class="text-[#151522]">
    <form @submit.prevent="onSubmit" class="space-y-5">
      <fieldset>
        <legend class="text-left mb-8">
          <FormTitle class="font-bold text-xl pr-56" title="Enter new password." />
        </legend>

        <div>
          <label for="password" class="invisible">Password</label>
          <VInput v-model.trim="payload.password" id="password" type="password" placeholder="Password"
            class="bg-[#F1F1F1]" />
        </div>

        <small class="mt-5 mb-8 inline-block">Must be at least 8 characters</small>
      </fieldset>

      <VButton content="Continue" class="bg-[#22151F] text-white py-3 w-full rounded-full" />
    </form>
  </div>
</template>
