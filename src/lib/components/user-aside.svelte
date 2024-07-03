<script lang="ts">
    import profile from '$assets/logo.png'
    import { req_user_follows, req_user_followers, req_user_team_follows } from '$lib/requests';
    import type { User } from "$lib/data/types";

    export let user: User;
</script>



<div class="profile-header">
    <div class="image-container">
        <a href={`/users/${user.id}`}>
            <img class="profile-image" src={profile} alt="Imagem do Usuário" />
        </a>
    </div>
    <h1>{user.display}</h1>
    <h2>@{user.username}</h2>
    <p>{user.bio}</p>
    <div class="peladeiros">
        <span>Seguidores:
        {#await req_user_followers(user.id) then followers}
            {followers.followers.length}
        {/await}
        </span>
    </div>
    <div class="peladeiros">
        <span>Seguindo:
        {#await req_user_follows(user.id) then follows}
            {follows.follows.length}
        {/await}
        </span>
    </div>
    <div class="peladeiros">
        <span>Times seguidos:
        {#await req_user_team_follows(user.id) then team_follows}
            {team_follows.follows.length}
        {/await}
        </span>
    </div>
</div>

<style>
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