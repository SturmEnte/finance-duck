<script setup lang="ts"></script>

<template>
	<header>
		<div id="title">Finance Duck</div>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/test">Test</RouterLink>
		</nav>
	</header>
	<main>
		<RouterView />
	</main>
</template>

<style scoped>
header {
	widows: 100vw;
	height: 100px;
	background: var(--background-sec);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 40px;
	box-sizing: border-box;
}

#title {
	margin-right: 50px;
	font-size: 2.2rem;
}

nav {
	display: flex;
	align-items: center;
	justify-content: center;
}

nav * {
	text-decoration: none;
	margin-right: 20px;
	color: var(--font-col);
}

nav .router-link-active {
	color: var(--accent-two);
	font-weight: 500;
}

main {
	width: 100%;
	height: 100%;
	background: var(--background-pri);
}
</style>

<!-- Global styling -->
<style>
:root {
	--background-pri: #2a3244;
	--background-sec: #8ed7e2;
	--accent-one: #b8f2e6;
	--accent-two: #f8e39d;
	--accent-three: #ffa69e;
	--font-col: #fff;
}

#app {
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
