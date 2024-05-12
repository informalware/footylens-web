<script lang="ts">
	import TeamResultCard from './../../lib/components/search/team-result-card.svelte';
	import UserResultCard from './../../lib/components/search/user-result-card.svelte';
    import axios from 'axios';
    import Input from '$components/ui/input/input.svelte';
	import { backend_address } from '$lib/consts';
	import Title from '$components/texts/title.svelte';

    let term: string;

    // Mock search function
    // The search should be done in the server
    async function search(term: string) {
        return axios.get(backend_address + `/search`, {
            params: { term }
        })
    }
</script>

<Title>Buscar</Title>

<div class="gap-4 flex flex-col items-center pad-sm">
    <div class="w-96">
        <Input bind:value={term} placeholder="Busque pessoas, times ou campeonatos"/>
    </div>
    {#if term}
        {#await search(term) then result}
            <Title>Usuários</Title>
            {#each result.data.users as user}
                <UserResultCard userid={user} />
            {:else}
                <p>Nenhum usuário encontrado</p>
            {/each}
            <Title>Times</Title>
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