<script setup lang="ts">
import Account from "../components/accounts/Account.vue";
import AddAccount from "../components/accounts/AddAccount.vue";

import DeleteAccountPopup from "../components/accounts/DeleteAccountPopup.vue";

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

function invertScroll(event) {
	event.preventDefault();
	const accountsElement = document.getElementById("accounts");
	accountsElement?.scroll({ left: accountsElement.scrollLeft + event.deltaY, behavior: "smooth" });
}

function deleteAccount(accountId: number) {
	console.log(`Deleting account with ID ${accountId}`);
}
</script>

<template>
	<div id="accounts" @wheel="invertScroll">
		<Account v-for="account in accounts" :key="account.id" :account="account" @delete-account="deleteAccount(account.id)" />
	</div>
	<div id="add-account-container">
		<AddAccount />
	</div>
</template>

<style scoped>
#accounts {
	width: 100%;
	height: 60%;
	display: flex;
	justify-content: space-around;
	align-items: stretch;
	gap: 20px;
	padding: 20px;
	padding-bottom: 10px;
	box-sizing: border-box;
	overflow-x: auto;
}

#accounts::-webkit-scrollbar {
	width: 12px;
	height: 12px;
}

#accounts::-webkit-scrollbar-thumb {
	background-color: var(--background-sec);
	border-radius: var(--corner-radius);
}

#accounts::-webkit-scrollbar-track {
	background: transparent;
}

#accounts > * {
	flex: 1 1 auto; /* Allow elements to grow and shrink as needed */
	min-width: 200px; /* Set a minimum width to ensure elements are not too small */
}

#add-account-container {
	width: 100%;
	height: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	padding-top: 10px;
	box-sizing: border-box;
}
</style>
