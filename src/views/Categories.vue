<script setup lang="ts">
import { ref } from "vue";

import CreateNewCategoryPopup from "../components/categories/CreateNewCategoryPopup.vue";

let categories = new Array<{ id: number; name: string; subcategories: string[] }>();

const isCreateNewCategoryPopupVisible = ref(false);

function showCreateNewCategoryPopup() {
	isCreateNewCategoryPopupVisible.value = true;
}

function createNewCategoryPopupResult(confirmed: boolean, name: string) {
	if (confirmed) {
		let id = 1;
		if (categories.length > 0) {
			id = categories[categories.length - 1].id + 1;
		}

		categories.push({ id, name, subcategories: [] });
	}

	isCreateNewCategoryPopupVisible.value = false;
}
</script>

<template>
	<div id="categories">
		<div v-for="category in categories" :key="category.id" class="category">
			<div class="category-name">{{ category.name }}</div>
		</div>
		<div @click="showCreateNewCategoryPopup" id="createNewCategory">+</div>
	</div>

	<CreateNewCategoryPopup v-if="isCreateNewCategoryPopupVisible" @result="createNewCategoryPopupResult" />
</template>

<style scoped>
#categories {
	padding: var(--margin);
	box-sizing: border-box;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: row;

	--category-name-height: 50px;
}

.category {
	background: var(--background-sec-darker);
	margin-right: var(--margin);
	height: 100px;
}

.category,
.category-name,
#createNewCategory {
	width: 250px;
	border-radius: var(--corner-radius);
}

.category-name,
#createNewCategory {
	height: var(--category-name-height);
	background: var(--background-sec);
	display: flex;
	justify-content: center;
	align-items: center;
}

#createNewCategory {
	cursor: pointer;
	user-select: none;
	font-weight: 100;
	font-size: 1.6rem;
}
</style>
