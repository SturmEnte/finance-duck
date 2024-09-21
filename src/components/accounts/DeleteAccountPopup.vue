<script setup lang="ts">
const emit = defineEmits(["result"]);

function result(confirmed: boolean) {
	emit("result", confirmed);
}
</script>

<template>
	<div id="container">
		<div id="popup">
			<div id="text">Do you really want to delete the account? This can not be reverted!</div>
			<div id="buttons">
				<button @click="result(true)" id="confirm">Confirm</button>
				<button @click="result(false)" id="cancel">Cancel</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
#container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
}

#popup {
	width: 40vw;
	background-color: var(--background-sec);
	border-radius: var(--corner-radius);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: var(--margin);
	box-sizing: border-box;
}

#text {
	text-align: center;
}

#buttons {
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: var(--margin);
}

button {
	width: 45%;
	height: 40px;
	border: none;
	border-radius: var(--corner-radius);
	cursor: pointer;
	color: white;
	font-size: 1rem;
	margin: 0 12px;
}

#confirm {
	background-color: var(--font-col-green);
}

#cancel {
	background-color: var(--font-col-red);
}
</style>
