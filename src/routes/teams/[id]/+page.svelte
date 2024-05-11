<script>
    import team_img from '$assets/flamengo.png'
    import { Shield } from "lucide-svelte";

    import MatchCard from '$lib/components/match-card.svelte';

    import { req_team, req_team_matches, req_match, req_team_followers } from '$lib/requests';
    import { page } from '$app/stores';

    let id = Number($page.params.id)
</script>


{#await req_team(id) then team}
    <div class="team-header">
        <Shield size={128}/>
        <h1>
            {team.name}
            <button class="Button">Seguir time</button>
            <h2>
                {team.league}
            </h2>
            <h3>
                Seguidores: 
                {#await req_team_followers(id) then followers}
                    {followers.followers.length}
                {/await}
            </h3>
        </h1>
    </div>
    <div class="team-matches">
        {#await req_team_matches(id) then match_list}
        {#each match_list.matches as mid}
        {#await req_match(mid) then match}
        <MatchCard {match}/>
        {/await}
        {/each}
        {/await}
    </div>
{/await}


<style>
    .team-header {
        display: flex;
        align-items: center;
        gap: 2rem;
        
        margin: 2rem;

        align-self: left;
    }

    .team-matches {
        display: grid;
        gap: 1rem;
        margin: 1rem;
    }

    h1 {
        font-weight: bold;
        font-size: 2.5em; /* Ajuste o tamanho conforme necessário */
        margin-bottom: 0.5em; /* Ajuste a margem conforme necessário */
    }

    h2 {
        font-size: 0.4em; /* Ajuste o tamanho conforme necessário */
    }

    h3 {
        font-size: 0.45em;
        font-weight: bold;
    
    }

    .Button {
        background-color: hsl(var(--accent));
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;

        position: relative;
        top: -0.25em;
        margin-left: 2em;
        margin-bottom: 1em;
    }

    .Button:hover {
        background-color: #0d2035;
    }
</style>