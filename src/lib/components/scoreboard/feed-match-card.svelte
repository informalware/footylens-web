<script lang="ts">
	import type { Match, Team } from "$lib/data/types";
    import { Shield } from "lucide-svelte";

    import { req_team } from "$lib/requests";

    export let match: Match;
</script>


<div class="match-box">
    <div class="grid grid-cols-5">
        {#await req_team(match.home) then team}
        <div class="team">
            <Shield size={64}/>
            <div class="team-name">{team.name}</div>
        </div>
        <div class="score">
            <div class="left">{match.scoreboard.first}</div>
            <div style="font-size: 50%;">X<div>{team.league}</div></div>
            <div class="right">{match.scoreboard.second}</div>
        </div>
        {#await req_team(match.away) then team}
        <div class="team">
            <Shield size={64}/>
            <div class="team-name">{team.name}</div>
        </div>
        {/await}
        {/await}
    </div>
</div>

<style>
    .match-box {
        width: 600px;
        height: 15%;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: hsl(var(--accent));
        border-radius: 25px;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    .team {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;

        font-weight: bold;
        font-size: 1.5em;
    }

    .team-name {
        text-align: center;
    }

    .score {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 4em;
        font-weight: bold;
    }
</style>