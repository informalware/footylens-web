<script lang="ts">
	import Title from "./title.svelte";

    export let left: boolean
</script>

<Title bind:left><span data-testid="child" /></Title>