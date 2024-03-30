<script>
    import { onMount } from 'svelte';

    import profile from '$assets/bh.png';
    import team_img from '$assets/flamengo.png'

    import { data } from "$lib/data/mocks/profiles";
    import { page } from "$app/stores";

    function findUser(name) {
        return data.find((user) => user.at === name);
    }

    function handleSubmit() {
        // Aqui você faria a requisição para o backend com os valores do formulário
        console.log(formValues);
    }

    onMount(() => {
        formValues.name = user.name;
        formValues.bio = user.bio;
        formValues.team = user.team.name;
    });

    let user = findUser("th-duvanel");

    let formValues = {
        name: user.name,
        bio: user.bio,
        team: user.team
    };
</script>


<!--
    Página de personalização do usuário

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
    </div>
    <div class="gap-4 flex flex-col items-center last-matches">
        <form on:submit|preventDefault={handleSubmit}>
            <h1>Customizar Perfil:</h1>
            <label>
                <h3>Nome:</h3>
                <input type="text" bind:value={formValues.name} />
            </label>
            <label>
                <h3>Bio:</h3>
                <textarea bind:value={formValues.bio}></textarea>
            </label>
            <label>
                <h3>Time:</h3>
                <input type="text" bind:value={formValues.team} />
            </label>
            <a href="/profile">
            <button type="submit">Salvar</button>
            </a>
        </form>
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

    form {
        background-color: #15293f;
        padding: 20px;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }

    input, textarea {
        width: 600px;
        padding: 10px;
        font-size: 16px;
        background-color : rgb(5, 17, 29); 
    }

    button[type="submit"] {
        background-color: #0e2136;
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }

    button[type="submit"]:hover {
        background-color: #0d2035;
    }
</style>