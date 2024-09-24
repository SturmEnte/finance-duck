import { createWebHistory, createRouter } from "vue-router";

import DashboardView from "./views/Dashboard.vue";
import TransactionsView from "./views/Transactions.vue";
import AccountsView from "./views/Accounts.vue";
import CategoriesView from "./views/Categories.vue";

const routes = [
	{ path: "/", component: DashboardView },
	{ path: "/transactions", component: TransactionsView },
	{ path: "/accounts", component: AccountsView },
	{ path: "/categories", component: CategoriesView },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
