<script lang="ts">
	import Timer from '$lib/components/scoreboard/timer.svelte';
	import { page } from "$app/stores";
	import type { Match } from './../../../lib/data/types';
	import PlayerCard from "$components/scoreboard/player-card.svelte";
	import { getMatch } from '$lib/data/mocks/matches.js';
	import TeamGoalsDisplay from '$components/scoreboard/team-goals-display.svelte';

    let match: Match = getMatch(Number($page.params.id));
</script>

<!--
@component

Página para exibição de dados de uma partida especificada pela rota dinâmica `/match/[id]`

-->
<div class="text-center">
	<Timer initial={match.started_at.getTime()} finished={match.finished?.getTime()} huge/>
</div>

<div class="grid grid-cols-2 gap-8" style="padding: 2rem;">
	<div class="place-self-end">
		<TeamGoalsDisplay team={match.home} huge/>
		
		<div class="flex flex-col gap-4">
			{#each match.home.squad.sort((a, b) => Number(b.stats.keeper) - Number(a.stats.keeper)) as player}
			<PlayerCard player={player}/>
			{/each}
		</div>
	</div>
	
	<div class="place-self-start">		
		<TeamGoalsDisplay team={match.visitor} huge/>

		<div class="flex flex-col gap-4">	
			{#each match.visitor.squad.sort((a, b) => Number(b.stats.keeper) - Number(a.stats.keeper)) as player}
			<PlayerCard player={player}/>
			{/each}
		</div>
	</div>
</div>