<script setup lang="ts">
import { ref } from "vue";

import CreateNewCategoryPopup from "../components/categories/CreateNewCategoryPopup.vue";

let categories = new Array<{ id: number; name: string; subcategories: { id: number; name: string }[] }>();

// Load categories from local storage
try {
	const categoriesJson = localStorage.getItem("categories");
	if (categoriesJson) {
		categories = JSON.parse(categoriesJson);
	}
} catch (err) {
	console.error("Failed to load categories from local storage", err);
}

const isCreateNewCategoryPopupVisible = ref(false);

let forCategory: number | undefined;

function initCreateNewCategory() {
	forCategory = undefined;
	showCreateNewCategoryPopup();
}

function initCreateNewSubCategory(categoryId: number) {
	forCategory = categoryId;
	showCreateNewCategoryPopup();
}

function showCreateNewCategoryPopup() {
	isCreateNewCategoryPopupVisible.value = true;
}

function createNewCategoryPopupResult(confirmed: boolean, name: string) {
	isCreateNewCategoryPopupVisible.value = false;

	if (!confirmed) {
		return;
	}

	let id = 1;

	if (forCategory) {
		// Create subcategory
		const category = categories.find((c) => c.id === forCategory);

		if (category?.subcategories.length > 0) {
			id = categories[categories.length - 1].id + 1;
		}

		category.subcategories.push({ id, name });
	} else {
		// Create category
		if (categories.length > 0) {
			id = categories[categories.length - 1].id + 1;
		}

		categories.push({ id, name, subcategories: [] });
	}

	// Save to local storage
	saveCategories();
}

function saveCategories() {
	localStorage.setItem("categories", JSON.stringify(categories));
}
</script>

<template>
	<div id="categories">
		<div v-for="category in categories" :key="category.id" class="category">
			<div class="category-name">{{ category.name }}</div>
			<div class="sub-categories">
				<div v-for="subcategory in category.subcategories" :key="subcategory.id" class="sub-category">{{ subcategory.name }}</div>
				<div @click="initCreateNewSubCategory(category.id)" class="add-sub-button">+</div>
			</div>
		</div>
		<div @click="initCreateNewCategory" id="createNewCategory">+</div>
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

.sub-category,
.add-sub-button {
	width: 100%;
	height: var(--category-name-height);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--corner-radius);
}

.add-sub-button {
	cursor: pointer;
	user-select: none;
	font-size: 1.6rem;
}

#createNewCategory {
	cursor: pointer;
	user-select: none;
	font-weight: 100;
	font-size: 1.6rem;
}
</style>
