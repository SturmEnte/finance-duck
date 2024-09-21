<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["result"]);

const name = ref("");
const description = ref("");
const startingBalance = ref(0);

function result(confirmed: boolean) {
	emit("result", confirmed, name.value, description.value, startingBalance.value);
	name.value = "";
	description.value = "";
	startingBalance.value = 0;
}
</script>

<template>
	<div id="container">
		<div id="popup">
			<div id="inputs">
				<label>Name</label>
				<input v-model="name" type="text" />
				<label>Description</label>
				<input v-model="description" type="text" />
				<label>Starting Balance</label>
				<input v-model="startingBalance" type="number" />
			</div>
			<div id="buttons">
				<button @click="result(true)" id="create">Create</button>
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

#inputs {
	display: flex;
	flex-direction: column;
	width: 100%;
}

input {
	border: none;
	border-radius: var(--corner-radius);
	background: var(--accent);
	font-size: 1rem;
	box-sizing: border-box;
	padding-left: 0.5rem;
	color: var(--font-col-dark);
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

#create {
	background-color: var(--font-col-green);
}

#cancel {
	background-color: var(--font-col-red);
}
</style>
