<script lang="ts">
    import profile from '$assets/logo.png';
    import type { User } from "$lib/data/types";

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
        <span>Seguidores:</span>
    </div>
    <div class="peladeiros">
        <span>Seguindo:</span>
    </div>
    <div>
        <button class="Button">Editar perfil</button>
    </div>
</div>

<style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    .profile-header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;

        padding: 2.5%;
        min-width: 250px;
        max-width: 16vw;
        background-color: hsl(var(--accent));
    }

    .image-container {
        width: 200px;
    }

    .profile-image {
        margin-bottom: 20px;
        margin-right: 20px;
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