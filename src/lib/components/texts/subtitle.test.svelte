<script lang="ts">
	import Subtitle from "./subtitle.svelte";

    export let left: boolean
</script>

<Subtitle bind:left><span data-testid="child" /></Subtitle>