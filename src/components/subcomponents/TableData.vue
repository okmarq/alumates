<script setup>
defineProps({
	name: {
		type: String,
		required: true
	}
})
</script>

<template>
	<td>{{ name }}</td>
</template>
