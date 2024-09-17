import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./view/Home.vue";
import TestView from "./view/Test.vue";

const routes = [
	{ path: "/", component: HomeView },
	{ path: "/test", component: TestView },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
