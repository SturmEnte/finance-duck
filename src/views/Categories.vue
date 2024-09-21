<script setup lang="ts">
import { ref } from "vue";

import CreateNewCategoryPopup from "../components/categories/CreateNewCategoryPopup.vue";

let categories = new Array<{ name: string; subcategories: string[] }>();

const isCreateNewCategoryPopupVisible = ref(false);

function showCreateNewCategoryPopup() {
	isCreateNewCategoryPopupVisible.value = true;
}

function createNewCategoryPopupResult(confirmed: boolean, name: string) {
	if (confirmed) {
		categories.push({ name, subcategories: [] });
	}

	isCreateNewCategoryPopupVisible.value = false;
}
</script>

<template>
	<div id="categories">
		<div @click="showCreateNewCategoryPopup" class="category" id="createNewCategory">+</div>
	</div>

	<CreateNewCategoryPopup v-if="isCreateNewCategoryPopupVisible" @result="createNewCategoryPopupResult" />
</template>

<style scoped>
#categories {
	padding: 20px;
	box-sizing: border-box;
}

.category {
	width: 250px;
	height: 50px;
	border-radius: var(--corner-radius);
	background: var(--background-sec);
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 100;
	font-size: 1.6rem;
}

#createNewCategory {
	cursor: pointer;
	user-select: none;
}
</style>
