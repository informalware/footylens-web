<script lang="ts">
	import type { Match } from './../../../lib/data/types.ts';
	import LineupCard from "$components/containers/lineup-card.svelte";
	import { getUser } from '$lib/data/mocks/users.js';
	import { getMatch } from '$lib/data/mocks/matches.js';

    export let data;
    let match: Match = getMatch(Number(data.id));
</script>


<h1 class="text-center text-6xl">Partida<br>{match.home.name} x {match.visitor.name}</h1>

<div class="grid grid-cols-2 gap-8">
	<div class="place-self-end">
		<p class="text-5xl text-right">{match.home.goals}</p>
		<div class="flex flex-col gap-4">
			{#each match.home.squad as player}
			<LineupCard user={player.user} stats={player.stats}/>
			{/each}
		</div>
	</div>
	
	<div>
		<p class="text-5xl">{match.visitor.goals}</p>
		<div class="flex flex-col gap-4">	
			{#each match.visitor.squad as player}
			<LineupCard user={player.user} stats={player.stats}/>
			{/each}
		</div>
	</div>
</div>