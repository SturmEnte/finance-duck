<script setup lang="ts">
import { ref } from "vue";

import Account from "../components/accounts/Account.vue";
import AddAccount from "../components/accounts/AddAccount.vue";

import CreateAccountPopup from "../components/accounts/CreateAccountPopup.vue";
import DeleteAccountPopup from "../components/accounts/DeleteAccountPopup.vue";

let accounts: {
	id: number;
	name: string;
	description: string;
	balance: number;
	currency: string;
}[] = new Array<{ id: number; name: string; description: string; balance: number; currency: string }>();

// Load accounts from local storage
try {
	const accountsJson = localStorage.getItem("accounts");
	if (accountsJson) {
		accounts = JSON.parse(accountsJson);
	}
} catch (err) {
	console.error("Failed to load accounts from local storage", err);
}

const isDeletePopupVisible = ref(false);
let currentProcessedAccountId: number = -1;

function invertScroll(event: WheelEvent) {
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
	console.log("Delte account", result);
	isDeletePopupVisible.value = false;
	if (result) {
		accounts = accounts.filter((account) => account.id !== currentProcessedAccountId);
	}
	currentProcessedAccountId = -1;

	// Save new accounts array to local storage
	saveAccounts();
}

const isCreatePopupVisible = ref(false);

function openCreateAccountPopup() {
	console.log("Open create account popup");
	isCreatePopupVisible.value = true;
}

function createAccountPopupResult(createAccount: boolean, name: string, description: string, startingBalance: number) {
	console.log("Create account", createAccount, name, description, startingBalance);

	if (!createAccount) {
		isCreatePopupVisible.value = false;
		return;
	}

	let id = 1;

	if (accounts.length > 0) {
		id = accounts[accounts.length - 1].id + 1;
	}

	const account = {
		id,
		name,
		description,
		balance: startingBalance,
		currency: "€",
	};

	accounts.push(account);
	isCreatePopupVisible.value = false;

	// Save new accounts array to local storage
	saveAccounts();
}

function saveAccounts() {
	localStorage.setItem("accounts", JSON.stringify(accounts));
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
	gap: var(--margin);
	padding: var(--margin);
	padding-bottom: calc(var(--margin) / 2);
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
	padding: var(--margin);
	padding-top: calc(var(--margin) / 2);
	box-sizing: border-box;
}
</style>
