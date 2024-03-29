<script lang="ts">
	import type { Team } from "$lib/data/types";

    export let team: Team;
    export let huge: boolean = false;
</script>

<!--
@component

Elemento do scoreboard que exibe nome da equipe e os gols marcados
- `team: Team`: equipe
-->

<div class="justify-center items-center text-center" style="{huge ? 'padding: 2rem' : ''}">
    <p class="text-{huge ? 4 : 2}xl font-medium" style="margin-bottom: 1rem">{team.name}</p>
    <p class="text-{huge ? 6 : 4}xl font-black">{team.goals}</p>
</div>