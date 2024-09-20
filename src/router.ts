import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./views/Home.vue";
import AccountsView from "./views/Accounts.vue";

const routes = [
	{ path: "/", component: HomeView },
	{ path: "/accounts", component: AccountsView },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
