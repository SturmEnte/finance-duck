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

<style scoped></style>
