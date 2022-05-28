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
  email: ''
})
</script>

<template>
	<form @submit.prevent="onSubmit" class="space-y-5">
		<fieldset>
			<legend class="text-left mb-8">
				<FormTitle title="Reset password." class="pr-56" />
			</legend>

			<div>
				<label for="email" class="invisible">Email address</label>
				<VInput v-model.trim="payload.email" id="email" placeholder="Email address" class="bg-gray-200" />
			</div>
		</fieldset>

		<VButton content="Reset password" class="bg-neutral-900 text-white py-3 w-full rounded-full" />
	</form>

	<div class="text-center">Remember password? <router-link class="text-violet-800" :to="{ name: 'Login' }">
			Login
		</router-link>
	</div>
</template>
