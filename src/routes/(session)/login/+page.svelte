<script lang="ts">
    import { backend_address } from "$lib/consts";
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';

    export let form: ActionData;
</script>

<section>
    <form action="{backend_address}/login" method="POST" class="login-form" use:enhance>
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" required />
        <label for="password">Senha:</label>
        <input id="password" type="password" name="password" required />
        <button type="submit">Login</button>
        <a href="/signin">
            <button>Criar conta</button>
        </a>
    </form>

    {#if form?.error}
      <div class="notice error">
        {form.error}
      </div>
    {/if}
</section>


<style>
    .login-form {
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
        margin-bottom: 30px;
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