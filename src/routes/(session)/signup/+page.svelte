<script lang="ts">
    import { backend_address } from "$lib/consts";
</script>

<form method="POST" class="signin-form">
    <h2>Cadastro:</h2>
    <label for="username">Nome de Usuário:</label>
    <input id="username" type="text" name="username" placeholder="@username" required />
    <label for="display">Nome de Exibição:</label>
    <input id="display" type="text" name="display" placeholder="User" required />
    <label for="password">Senha:</label>
    <input id="password" type="password" name="password" placeholder="password" required />
    <label for="email">Email:</label>
    <input id="email" type="email" name="email" placeholder="rei.pele@footylens.com" required />
    <button type="submit">Cadastrar</button>
</form>


<style>
    .signin-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }

    input {
        width: 400px;
        padding: 3px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        color: black;
        font-size: 15px;
    }

    input::selection {
        background: #06102c; /* Cor de fundo do texto selecionado */
        color: white;
    }

    h2 {
        margin-bottom: 15px;
        font-size: 25px;
        font-weight: bold;
    }

    button {
        background-color: hsl(var(--background));
        color: white;
        padding: 5px 20px;
        border: none;
        border-radius: 4px;
        margin-top: 20px;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0d2035;
    }
</style>