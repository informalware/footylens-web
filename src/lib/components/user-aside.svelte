<script lang="ts">
    import profile from '$assets/bh.png';
    import team_img from '$assets/flamengo.png'

    import type { User } from "$lib/data/types";
    import MatchFeed from "$components/match-feed.svelte";
    import { matches } from "$lib/data/mocks/matches";

    import { data } from "$lib/data/mocks/profiles";
    import { page } from "$app/stores";

    export let user: User;
</script>



<div class="profile-header">
    <div class="image-container">
        <img class="profile-image" src={profile} alt="Imagem do Usuário" />
    </div>
    <h1>{user.name}</h1>
    <h2>@{user.at}</h2>
    <p>{user.bio}</p>
    <div class="peladeiros">
        <span>Peladeiros</span>
    </div>
    <div class="peladeiros">
    </div>
    <div>
        <button class="Button">Adicionar Amigo</button>
    </div>
</div>

<style>
    .profile-header {
        display: flex;
        flex-direction: column;
        align-items: left;
        text-align: left;

        padding: 2.5%;
        display: flex;
        justify-content: left;
        align-items: left;
        height: 100vh;
        min-width: 300px;
        max-width: 15vw;
        
        background-color: hsl(var(--accent));
    }

    .image-container {
        width: 200px;
    }

    .profile-image {
        width: 200px;
        height: 200px;
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

    
    .Button {
        background-color: #06102c;
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