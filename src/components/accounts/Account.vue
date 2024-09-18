<script setup lang="ts">
const props = defineProps(["account"]);

console.log(props.account);
</script>

<template>
	<div id="container">
		<div id="name">{{ props.account.name }}</div>
		<div id="description">{{ props.account.description }}</div>
		<div id="balance">{{ props.account.balance }} {{ props.account.currency }}</div>
	</div>
</template>

<style scoped>
#container {
	background: var(--background-sec);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: var(--corner-radius);
	box-sizing: border-box;
	padding: 20px;
}

#container * {
	margin-bottom: 8px;
}

#container:last-child {
	margin-bottom: 0;
}

#description {
	color: var(--font-col-dark);
	font-size: 0.7rem;
}

#balance {
	color: var(--accent);
}
</style>
