<script lang="ts">
	import { type User } from './../../lib/data/types';
	import SearchCard from './../../lib/components/containers/search-card.svelte';
    import entities from "$lib/data/mocks/entities";
	import Input from '$components/ui/input/input.svelte';

    let term: string;
    let results: User[] = [];

    // Mock search function
    // The search should be done in the server
    async function search() {
        if (!term) 
            results = [];
        else 
            results = entities.filter(
                value => 
                    value.id
                        .toLocaleLowerCase()
                        .includes(term.toLocaleLowerCase()) 
                ||  value.display
                        .toLocaleLowerCase()
                        .includes(term.toLocaleLowerCase()));
    }
</script>



<div class="gap-4 flex flex-col items-center pad-sm">
    <div class="w-96">
        <Input on:keyup={search} bind:value={term} placeholder="Busque pessoas, times ou campeonatos"/>
    </div>
    {#each results as result (result.id)}
    <SearchCard user={result} />
    {/each}
</div>