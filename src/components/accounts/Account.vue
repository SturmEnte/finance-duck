<script setup lang="ts">
const props = defineProps(["account"]);
const emit = defineEmits(["deleteAccount"]);

console.log(props.account);

function deleteAccount() {
	emit("deleteAccount");
}
</script>

<template>
	<div id="container">
		<div id="delete-button" @click="deleteAccount">x</div>
		<div id="info">
			<div id="name">{{ props.account.name }}</div>
			<div id="description">{{ props.account.description }}</div>
			<div id="balance">{{ props.account.balance }} {{ props.account.currency }}</div>
		</div>
	</div>
</template>

<style scoped>
#container {
	--delete-button-height: 1rem;
	--padding: 20px;

	background: var(--background-sec);

	border-radius: var(--corner-radius);
	box-sizing: border-box;
	padding: var(--padding);
}

#delete-button {
	position: relative; /* Added */
	bottom: 0; /* Adjust as needed */
	left: calc(100% - var(--padding)); /* Adjust as needed */

	width: min-content;
	height: var(--delete-button-height);
	cursor: pointer;

	z-index: 1;
	user-select: none;
}

#info {
	position: relative;
	bottom: var(--delete-button-height);
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

#info * {
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
