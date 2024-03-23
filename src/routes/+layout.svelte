<script lang="ts">
	import Header from "../components/containers/Header.svelte";

    
</script>

<Header></Header>

<slot />

<style>
	:root {
		font-family: sans-serif;
		font-size: 14px;
		background-color: rgb(32, 32, 32);
		color: whitesmoke;
	}
</style>