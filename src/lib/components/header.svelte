<script lang="ts">
	import Title from "$lib/components/texts/title.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
    import logo from '$assets/nome_branco.png'
    import { ToTitle } from "$lib/str_utils";

    import "/src/app.pcss";

    const pages = [
        { page: 'matches', button: 'Partidas' },
        { page: 'users', button: 'Usuários' },
        { page: 'search', button: 'Pesquisar' }
    ];
</script>

<!--
@component

Componente de cabeçalho que é usado por todo o site, sendo a barra superior do site
-->

<header class="">
    <a href="/home">
        <img src={logo} alt="Imagem do Usuário">
    </a>

    {#each pages as { page, button }}
    <Button href="/{page}" variant="secondary" size="lg" class="big-bold">{button}</Button>
    {/each}
</header>


<style>
    header {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 1rem;
        background-color: hsl(var(--accent));
        align-items: center;
    }

    img {
        width: 22rem;
    }
</style>