<script lang="ts">
	import type { Match, Team } from "$lib/data/types";
    import { Shield } from "lucide-svelte";

    import { req_team } from "$lib/requests";

    export let match: Match;
</script>


<div class="match-box">
    <a href="/matches/{match.id}">
    <div class="grid grid-cols-5">
        {#await req_team(match.home) then team}
        <div class="team">
            <Shield size={64}/>
            <div class="team-name">{team.name}</div>
        </div>
        <div class="score">
            <div class="left">{match.scoreboard.first}</div>
            <div style="display: flex; flex-direction: column; align-items: center; font-size: 1.1rem;">
                <div style="height: 50%; display: flex; align-items: flex-end;">X</div>
                <div>{team.league}</div>
            </div>
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
    </a>
</div>

<style>
    .match-box {
        min-width: 650px;
        max-width: 700px;
        min-height: 200px;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: hsl(var(--accent));
        border-radius: 25px;

        margin-bottom: 20px;
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
        padding: 1.5rem;

        font-weight: bold;
        font-size: 1.25em;
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