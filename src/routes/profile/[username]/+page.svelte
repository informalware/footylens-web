<script lang="ts">
    export let data: User;

    import profile from '$assets/bh.png';
    import team_img from '$assets/flamengo.png'
    import Match from "$components/containers/match-card.svelte";
    import { data as matches } from "$lib/data/mocks/matches";
</script>

<!--
    Página do perfil do usuário
-->

<main>
    <div class="profile-header">
        <img class="profile-header" src={profile} alt="Imagem do Usuário" />
        <h1>{data.name}</h1>
        <h2>{data.at}</h2>
        <p>{data.bio}</p>
        <div class="peladeiros">
            <span>{data.following}</span>
            <span>Peladeiros</span>
        </div>
        <div class="peladeiros">
            <span>{data.team}</span>
            <img class="team" src={team_img} alt={data.team.name} />
        </div>
        <div>
            <button class="addButton">Adicionar Amigo</button>
        </div>
    </div>
    <div class="gap-4 flex flex-col items-center last-matches">
        <h1>Últimas Partidas</h1>
        {#each matches as match}
        <div style="width: 32rem;">
            <Match match={match} />
        </div>
        {/each}
    </div>
</main>


<style>
    main {
        padding: 4%;
        display: flex;
        justify-content: left;
        align-items: left;
        height: 100vh;
    }

    .last-matches {
        margin-left: 150px;
    }

    .profile-header {
        display: flex;
        flex-direction: column;
        align-items: left;
        text-align: left;

        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 18px;
        color: gray;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        margin-bottom: 20px;
    }

    .team {
        width: 30px;
        height: 30px;
        object-fit: cover;
        margin-bottom: 20px;
    }
    
    .addButton {
        background-color: #1e3147;
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }

    .addButton:hover {
        background-color: #0d2035;
    }

    .peladeiros{
        display: flex;
        align-items: left;
        margin-bottom: 10px;
    }

    .peladeiros span {
        
        font-size: 16px;
        font-weight: bold;
        margin-right: 5px;
    }
</style>