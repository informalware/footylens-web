<script lang="ts">
    import profile from '$assets/logo.png'
    import { req_user, update_user } from '$lib/requests';
    import type { PageData } from '../../$types';
    import type { User } from "$lib/data/types";
    import { backend_address } from "$lib/consts";

    export let data: PageData;

    let user_id = Number(data.props.user_session);
</script>


<main>
    <div class="form-box">
    {#await req_user(user_id) then user}
    <form action="{backend_address}/users/{user_id}" method="UPDATE" class="update-form">
        <h2>Edite seu perfil:</h2>
        <label for="display">Nome de usuário:</label>
        <input id="display" type="text" name="display" class="user-info"/>
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" class="user-info"/>
        <label for="bio">Descrição:</label>
        <textarea id="bio" name="bio" class="description"></textarea>
        <button type="submit">Postar edição</button>
    </form>
    {/await}
    </div>
</main>


<style>
    .form-box {
        padding: 1rem;
        min-width: 700px;
        max-width: 50%;
    }

    h2 {
        font-size: 2rem;
        font-weight: bold;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label {
        font-weight: bold;
        font-size: 1.2rem;
    }

    .user-info {
        min-height: 2.5rem;
        color: black;
    }

    .description {
        min-height: 10rem;
        font-size: 1.2rem;
        border-radius: 5px;
        padding: 5px;
        color: black;
        background-color: #f8f9fa;
    }

    input {
        font-size: 1.2rem;
        border-radius: 5px;
        padding: 5px;
        color: black;
        background-color: #f8f9fa;
    }

    button {
        width: 10rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        margin-top: 1rem;
        border-radius: 10px;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>