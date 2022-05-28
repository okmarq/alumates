<script setup>
import VInput from "@/components/subcomponents/VInput.vue"
import FormTitle from "@/components/subcomponents/FormTitle.vue"
import VButton from "@/components/subcomponents/VButton.vue"
import axios from "axios";
import { reactive } from "vue";

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
	<form @submit.prevent="onSubmit" class="space-y-5">
		<fieldset>
			<legend class="text-left mb-8">
				<FormTitle title="Enter new password." class="pr-56" />
			</legend>

			<div>
				<label for="password" class="invisible">Password</label>
				<VInput v-model.trim="payload.password" id="password" type="password" placeholder="Password" class="bg-gray-200" />
			</div>

			<small class="my-5 inline-block">Must be at least 8 characters</small>
		</fieldset>

		<VButton content="Continue" class="bg-neutral-900 text-white py-3 w-full rounded-full" />
	</form>

	<div class="text-center">Remember password? <router-link class="text-violet-800" :to="{ name: 'Login' }">Login
		</router-link>
	</div>
</template>
