<script lang="ts">
	import Title from "$lib/components/texts/title.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
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
        <Title>FootyLens</Title>
    </a>

    {#each pages as { page, button }}
    <Button href="/{page}" variant="secondary">{button}</Button>
    {/each}
</header>


<style>
    header {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 1rem;
        background-color: hsl(var(--accent));
    }
</style>