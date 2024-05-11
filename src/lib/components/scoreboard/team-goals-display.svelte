<script lang="ts">
	import type { Match, Team } from "$lib/data/types";
    import { Shield } from "lucide-svelte";

    import { req_team } from "$lib/requests";

    export let match: Match;
</script>


<div class="grid grid-cols-2 gap-20">
    <div class="home">
        <Shield size={128}/>

        {#await req_team(match.home) then team}
        <a href={`/teams/${team.id}`}>
            <p class="name">{team.name}</p>
        </a>
        {/await}

        <p class="goals">{match.scoreboard.first}</p>
    </div>
    <div class="away">
        <Shield size={128}/>

        {#await req_team(match.away) then team}
        <a href={`/teams/${team.id}`}>
            <p class="name">{team.name}</p>
        </a>
        {/await}

        <p class="goals">{match.scoreboard.second}</p>
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
        margin-bottom: 1rem;
        min-height: 60px;
        display: inline-block;
    }

    .shield {
        width: 128px;
        height: 128px;
    }

    .home {
        place-self: end;
        border-radius: 50px;
        background-color: hsl(var(--accent));
    }

    .away {
        place-self: start;
        border-radius: 50px;
        background-color: hsl(var(--accent));
    }
</style>