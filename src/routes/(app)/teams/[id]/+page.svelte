<script lang="ts">
    import type { PageData } from './$types';

    import FeedMatchCard from '$components/scoreboard/feed-match-card.svelte';

    import { req_team, req_team_matches, req_match, req_team_followers } from '$lib/requests';
    import { post_user_follows_team, delete_user_unfollows_team } from '$lib/requests';
    import { page } from '$app/stores';
    import { Shield } from "lucide-svelte";

    export let data: PageData;

    let id = Number($page.params.id)
    let user_id = Number(data.props.user_session)
    let following = false;

    async function check_follows() {
        const res = await req_team_followers(id);
        following = res.followers.includes(user_id);
    }
</script>


{#await req_team(id) then team}
    <div class="team-header">
        <Shield size={128}/>
        <h1>
            {team.name}
            {#await check_follows() then _}
                {#if following}
                    <button class="Button active" on:click={async () => { await delete_user_unfollows_team(user_id, id); following = false; }}>Deixar de seguir</button>
                {:else}
                    <button class="Button" on:click={async () => { await post_user_follows_team(user_id, id); following = true; }}>Seguir time</button>
                {/if}
            {/await}
            <h2>
                {team.league}
            </h2>
            <h3>
                Seguidores: 
                {#await req_team_followers(id) then {followers}}
                    {followers.length}
                {/await}
            </h3>
        </h1>
    </div>
    <div class="team-matches">
        {#await req_team_matches(id) then match_list}
        {#each match_list.matches as mid}
        {#await req_match(mid) then match}
            <FeedMatchCard match={match}/>
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
        min-width: 150px;


        position: relative;
        margin-bottom: 1em;
    }

    .Button:hover {
        background-color: #0d2035;
    }

    .Button:active {
        background-color: #0d2035;
    }
</style>