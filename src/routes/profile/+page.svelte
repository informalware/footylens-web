<script>
    import profile from '$assets/bh.png';
    import team_img from '$assets/flamengo.png'

    import Match from "$lib/components/containers/match-card.svelte";
    import MatchFeed from "$components/containers/match-feed.svelte";
    import { data as matches } from "$lib/data/mocks/matches";

    import { data } from "$lib/data/mocks/profiles";
    import { page } from "$app/stores";

    function findUser(name) {
        return data.find((user) => user.at === name);
    }

    let user = findUser("ojarrisonn");

    let i = 0;
</script>


<!--
    Página do perfil do usuário

    -> Necessário linkar partidas apenas que usuário participou;
    -> Necessário linkar amigos do usuário;
-->

<main>
    <div class="profile-header">
        <img class="profile-header" src={profile} alt="Imagem do Usuário" />
        <h1>{user.name}</h1>
        <h2>@{user.at}</h2>
        <p>{user.bio}</p>
        <div class="peladeiros">
            <span>{user.following}</span>
            <span>Peladeiros</span>
        </div>
        <div class="peladeiros">
            <span>{user.team.name}</span>
            <img class="team" src={team_img} alt={user.team} />
        </div>
        <div>
            <a href="/profile/customize" target="_self">
                <button class="Button">Editar perfil</button>
            </a>
        </div>
    </div>
    <div class="gap-4 flex flex-col items-center last-matches">
        <h1>Últimas Partidas</h1>

        <MatchFeed loader={async () => {
            if (i >= matches.length) throw new Error("No more matches");
        
            const value = matches[i];
            i++;
            return value;
        }}/>
        
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
    
    .Button {
        background-color: #1e3147;
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }

    .Button:hover {
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