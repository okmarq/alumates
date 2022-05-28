<script setup>
import VInput from "@/components/subcomponents/VInput.vue"
import FormTitle from "@/components/subcomponents/FormTitle.vue"
import VButton from "@/components/subcomponents/VButton.vue"
</script>

<template>
	<div class="px-4 space-y-10">
		<header class="">
			<p class="font-bold text-left">Alumates</p>
		</header>

		<form class="space-y-5">
			<fieldset>
				<legend class="text-left mb-8">
					<FormTitle title="Reset password." class="pr-56" />
				</legend>

				<div>
					<label for="email" class="invisible">Email address</label>
					<VInput id="email" placeholder="Email address" class="bg-gray-200" />
				</div>
			</fieldset>

			<VButton content="Reset password" class="bg-neutral-900 text-white py-3 w-full rounded-full" />
		</form>

		<div class="text-center">Remember password? <a href="login" class="text-violet-800 bg">Login</a></div>
	</div>
</template>
