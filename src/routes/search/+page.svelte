<script lang="ts">
	import TeamResultCard from './../../lib/components/search/team-result-card.svelte';
	import UserResultCard from './../../lib/components/search/user-result-card.svelte';
    import axios from 'axios';
	import type { User } from './../../lib/data/types';
    import Input from '$components/ui/input/input.svelte';
	import { backend_address } from '$lib/consts';

    let term: string;

    // Mock search function
    // The search should be done in the server
    async function search(term: string) {
        return axios.get(backend_address + `/search`, {
            params: { term }
        })
    }
</script>

<h1 class="font-bold text-4xl text-center">Buscar</h1>

<div class="gap-4 flex flex-col items-center pad-sm">
    <div class="w-96">
        <Input bind:value={term} placeholder="Busque pessoas, times ou campeonatos"/>
    </div>
    {#if term}
        {#await search(term) then result}
            <h1 class="font-bold text-4xl text-center">Usuários</h1>
            {#each result.data.users as user}
                <UserResultCard userid={user} />
            {:else}
                <p>Nenhum usuário encontrado</p>
            {/each}
            <h1 class="font-bold text-4xl text-center">Times</h1>
            {#each result.data.teams as team}
                <TeamResultCard teamid={team} />
            {:else}
                <p>Nenhum usuário encontrado</p>
            {/each}
        {:catch err}
            <p>Failed to make request due to {err}</p>
        {/await}
    {/if}
</div>