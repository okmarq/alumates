<script setup>
import { useStore } from 'vuex';

const store = useStore()
</script>

<template>
	<div class="bg-gray-700 bg-opacity-50 backdrop-blur absolute -top-5 right-0 z-50"
		:class="{ 'translate-x-0 transition-all w-full h-full': true, 'hidden': false }">

		<div class=""></div>
	</div>
</template>
