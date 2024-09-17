import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./view/Home.vue";
import AccountsView from "./view/Accounts.vue";

const routes = [
	{ path: "/", component: HomeView },
	{ path: "/accounts", component: AccountsView },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
