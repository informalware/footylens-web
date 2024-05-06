<script>
    import team_img from '$assets/flamengo.png'
    import { Shield } from "lucide-svelte";
    import { data as Teams } from '$lib/data/mocks/teams.ts';

    import MatchCard from '$lib/components/match-card.svelte';
    import { matches } from '$lib/data/mocks/matches.ts';

    import { page } from '$app/stores';

    let team = Teams[Number($page.params.id)];
</script>


<main>
    <div class="team-header">
        <Shield size={128}/>
        <h1>
            {team.name}
            <h2>
                {team.league}
            </h2>
            <h3>
                Seguidores: 
            </h3>
        </h1>
    </div>
    <div class="team-matches">
        {#each matches as match}
            <MatchCard match={match}/>
        {/each}
    </div>
</main>


<style>
    main {
        align-items: left;
    }

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
</style>