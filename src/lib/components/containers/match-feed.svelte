<script lang="ts">
	import Button from "$components/ui/button/button.svelte";
import type { Match } from "$lib/data/types";
	import MatchCard from "./match-card.svelte";
	import { onMount } from "svelte";

    export let loader: () => Promise<Match>;
    let loading = false;
    let matches: Match[] = [];

    async function loadNextMatch() {
        if (loading) return;
        loading = true;

        let new_matches: Match[] = [];

        for (let i = 0; i < 10; i++)
            try {
                new_matches.push(await loader());
            } catch {
                loading = false;
                break;
            }

        if (new_matches) 
            matches = [...matches, ...new_matches];
        loading = false;
    }

    onMount(loadNextMatch)
</script>

<!--
@component
Componente de feed de partidas. Carrega novas entradas sempre que o botão for pressionado (WIP)

- `loader`: callback que retorna um objeto `Match` indicando como carregar a próxima partida

-->


<div class="gap-4 flex flex-col items-center content">
{#each matches as match}
    <MatchCard match={match} />
{/each}
<Button on:click={loadNextMatch} variant="secondary">Carregar Mais</Button>
</div>
{#if loading}
<p>LOADING...</p>
{/if}

<style>
    .content {
        padding: 1rem;
    }
</style>