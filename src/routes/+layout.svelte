<script lang="ts">
	import '../app.pcss';
	import Header from '../components/containers/Header.svelte';
</script>

<Header></Header>

<slot />

<style>
	:root {
		font-family: sans-serif;
		font-size: 14px;
		color: whitesmoke;
		min-height: 100%;
	}
</style>
