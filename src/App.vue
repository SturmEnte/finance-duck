<script setup lang="ts"></script>

<template>
	<div id="app-container">
		<header>
			<div id="title">Finance Duck</div>
			<nav>
				<RouterLink to="/">Dashboard</RouterLink>
				<RouterLink to="/accounts">Accounts</RouterLink>
				<RouterLink to="/categories">Categories</RouterLink>
			</nav>
		</header>
		<main>
			<RouterView />
		</main>
	</div>
</template>

<style scoped>
#app-container {
	--header-height: 100px;
}

header {
	widows: 100vw;
	height: var(--header-height);
	background: var(--background-sec);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: calc(var(--margin) * 2);
	box-sizing: border-box;
}

#title {
	margin-right: 50px;
	font-size: 1.6rem;
}

nav {
	display: flex;
	align-items: center;
	justify-content: center;
}

nav * {
	text-decoration: none;
	margin-right: var(--margin);
	color: var(--font-col);
}

nav .router-link-active {
	color: var(--accent);
	font-weight: 500;
}

main {
	width: 100vw;
	height: calc(100vh - var(--header-height));
	background: var(--background-pri);
}
</style>

<!-- Global styling -->
<style>
:root {
	--background-pri: #2a3244;
	--background-sec: #8ed7e2;

	--accent: #f8e39d;

	--font-col-green: #aaebc3;
	--font-col-red: #ffa69e;

	--font-col: #fff;
	--font-col-dark: #868686;

	--corner-radius: 15px;
	--margin: 20px;

	font-family: Arial, Helvetica, sans-serif;
	font-weight: 300;
	font-size: 24px;
	color: var(--font-col);
}

body,
#app {
	margin: 0;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
}
</style>
