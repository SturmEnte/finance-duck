<script setup lang="ts">
import { ref } from "vue";

import Account from "../components/accounts/Account.vue";
import AddAccount from "../components/accounts/AddAccount.vue";

import CreateAccountPopup from "../components/accounts/CreateAccountPopup.vue";
import DeleteAccountPopup from "../components/accounts/DeleteAccountPopup.vue";

// Testing data
let accounts = [
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
	{
		id: 6,
		name: "Account 6",
		description: "Eiusmod tempor",
		balance: 6000,
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

let isDeletePopupVisible = ref(false);
let currentProcessedAccountId = -1;

function invertScroll(event) {
	event.preventDefault();
	const accountsElement = document.getElementById("accounts");
	accountsElement?.scroll({ left: accountsElement.scrollLeft + event.deltaY, behavior: "smooth" });
}

function deleteAccount(accountId: number) {
	console.log("Deleting account with id:", accountId);
	isDeletePopupVisible.value = true;
	currentProcessedAccountId = accountId;
}

function deleteAccountPopupResult(result: boolean) {
	console.log("Result", result);
	isDeletePopupVisible.value = false;
	if (result) {
		accounts = accounts.filter((account) => account.id !== currentProcessedAccountId);
	}
	currentProcessedAccountId = -1;
}

let isCreatePopupVisible = ref(false);

function openCreateAccountPopup() {
	console.log("Open create account popup");
	isCreatePopupVisible.value = true;
}

function createAccountPopupResult(createAccount: boolean, name: string, description: string, balance: number) {
	if (!createAccount) {
		isCreatePopupVisible.value = false;
		return;
	}

	const account = {
		id: accounts.length + 1,
		name,
		description,
		balance,
		currency: "€",
	};

	accounts.push(account);
}
</script>

<template>
	<div id="accounts" @wheel="invertScroll">
		<Account v-for="account in accounts" :key="account.id" :account="account" @delete-account="deleteAccount(account.id)" />
	</div>
	<div id="add-account-container">
		<AddAccount @click="openCreateAccountPopup" />
	</div>

	<CreateAccountPopup v-if="isCreatePopupVisible" @result="createAccountPopupResult" />
	<DeleteAccountPopup v-if="isDeletePopupVisible" @result="deleteAccountPopupResult" />
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
	--width: 280px;
	width: var(--width);
	max-width: var(--width);
	min-width: var(--width);
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
