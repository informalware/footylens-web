<script lang="ts">
	import type { Match, Team } from "$lib/data/types";
    import { Shield } from "lucide-svelte";

    import { req_team } from "$lib/requests";

    export let match: Match;
</script>


<div class="grid grid-cols-2 gap-20">
    <div class="home">
        <Shield size={128}/>

        {#await req_team(match.homeId) then team}
        <a href={`/teams/${team.id}`}>
            <p class="name">{team.name}</p>
        </a>
        {/await}

        <p class="goals">{match.scoreboard[0]}</p>
    </div>
    <div class="away">
        <Shield size={128}/>

        {#await req_team(match.visitorId) then team}
        <a href={`/teams/${team.id}`}>
            <p class="name">{team.name}</p>
        </a>
        {/await}

        <p class="goals">{match.scoreboard[1]}</p>
    </div>
</div>


<style>
    div {
        text-align: center;
        padding: 2rem;
    }

    .goals {
        font-size: 30px;
    }

    .name {
        font-size: 20px; 
        margin-top: 1rem; 
        margin-bottom: 1rem
    }

    .shield {
        width: 128px;
        height: 128px;
    }
</style>