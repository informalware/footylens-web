<script lang="ts">
	import { rating_as_number, type Rating } from "$lib/data/types";
    import { Star } from "lucide-svelte";

    export let rating: Rating
</script>

<div class="flex-row inline-block">
    {#each Array(rating_as_number(rating)) as _r }
    <Star class="inline-flex" size="1.5rem"/>
    {/each}
</div>