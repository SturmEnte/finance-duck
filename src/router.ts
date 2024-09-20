import { createMemoryHistory, createRouter } from "vue-router";

import DashboardView from "./views/Dashboard.vue";
import AccountsView from "./views/Accounts.vue";

const routes = [
	{ path: "/", component: DashboardView },
	{ path: "/accounts", component: AccountsView },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
