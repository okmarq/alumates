<script setup>
import TableHead from "@/components/subcomponents/TableHead.vue"
import TableData from "@/components/subcomponents/TableData.vue"
</script>

<template>
	<div>
		<table>
			<thead>
				<tr>
					<TableHead name="Name" />
					<TableHead name="Set" />
				</tr>
			</thead>
			<tbody>
				<tr>
					<TableData name="Arthur Prescott" />
					<TableData name="1998" />
				</tr>
			</tbody>
		</table>
	</div>

	<div class="flex justify-between items-center px-20 gap-5">
		<span>Page:</span>
		<span>1</span>
		<span>2</span>
		<span>3</span>
		<span>4</span>
		<span>5</span>
		<span>...</span>
		<span>15</span>
	</div>
</template>
