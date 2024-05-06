<script lang="ts">
    import axios from 'axios';
	import type { User } from './../../lib/data/types';
    import Input from '$components/ui/input/input.svelte';
	import { backend_address } from '$lib/consts';

    let term: string;

    // Mock search function
    // The search should be done in the server
    async function search() {
        return axios.get(backend_address + `/search`, {
            data: {
                term: term
            }
        })
    }
</script>

<h1 class="font-bold text-4xl text-center"> Searching </h1>

<div class="gap-4 flex flex-col items-center pad-sm">
    <div class="w-96">
        <Input bind:value={term} placeholder="Busque pessoas, times ou campeonatos"/>
    </div>
    {#if term}
        {#await search() then result}
            <p>Result: {result}</p>
        {:catch err}
            <p>Failed to make request due to {err}</p>
        {/await}
    {/if}
</div>