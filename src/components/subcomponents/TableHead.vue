<script setup>
defineProps({
	name: {
		type: String,
		required: true
	}
})
</script>

<template>
	<th>{{ name }}</th>
</template>
