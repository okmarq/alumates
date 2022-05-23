<script setup>
import VButton from "@/components/subcomponents/VButton.vue"
import VInput from "@/components/subcomponents/VInput.vue"
import { useStore } from "vuex";

const store = useStore()
</script>

<template>
	<div>
		<div>
			<h2>{{ store.getters.school }}</h2>
		</div>

		<VButton content="Join alumni network" />
	</div>
	<div>
		<p>All Alumni</p>

		<form>
			<VInput v-model.trim="search" type="search" placeholder="Search by name or User ID"
				:class="steps[step].step_name != '3' ? 'pl-9' : ''" />

				<VButton content="Add filters" type="submit" />
		</form>
	</div>
	<div></div>
</template>
