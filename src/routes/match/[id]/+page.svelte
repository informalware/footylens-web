<script lang="ts">
	import entities from '$lib/data/mocks/entities';
	import LineupCard from "$components/containers/lineup-card.svelte";


    export let data;
</script>


<h1>Match {data.id}</h1>

<LineupCard user={entities[0]} stats={{goals: 5, assists: 2, yellow_cards: 2, red_card: true, injury: true}}/>