<script setup lang="ts"></script>

<template>
	<h1>Hello App!</h1>
	<p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
	<nav>
		<RouterLink to="/">Go to Home</RouterLink>
		<RouterLink to="/test">Go to Test</RouterLink>
	</nav>
	<main>
		<RouterView />
	</main>
</template>


<style>
* {
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 300;
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
