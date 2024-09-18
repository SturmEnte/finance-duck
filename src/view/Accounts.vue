<script setup lang="ts">
import Account from "../components/Account.vue";

// Testing data
const accounts = [
	{
		id: 1,
		name: "Account 1",
		description: "Foo bar",
		balance: 1000,
		currency: "€",
	},
	{
		id: 2,
		name: "Account 2",
		description: "Lorem ipsum",
		balance: 2000,
		currency: "€",
	},
	{
		id: 3,
		name: "Account 3",
		description: "Dolor sit amet",
		balance: 3000,
		currency: "€",
	},
	{
		id: 4,
		name: "Account 4",
		description: "Consectetur adipiscing",
		balance: 4000,
		currency: "€",
	},
	{
		id: 5,
		name: "Account 5",
		description: "Elit sed do",
		balance: 5000,
		currency: "€",
	},
	{
		id: 6,
		name: "Account 6",
		description: "Eiusmod tempor",
		balance: 6000,
		currency: "€",
	},
];
</script>

<template>
	<div id="accounts">
		<Account v-for="account in accounts" :key="account.id" :account="account" />
	</div>
</template>

<style scoped>
#accounts {
	width: 100%;
	height: 50%;
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: space-around;
	align-items: stretch;
	gap: 20px;
	padding: 20px;
	box-sizing: border-box;
	overflow-x: auto;
}

#accounts > * {
	flex: 1 1 auto; /* Allow elements to grow and shrink as needed */
	min-width: 200px; /* Set a minimum width to ensure elements are not too small */
}
</style>
