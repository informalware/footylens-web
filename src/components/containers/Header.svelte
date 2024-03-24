<script lang="ts">
	import Title from "$components/texts/Title.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
    import { ToTitle } from "$lib/str_utils";

    import "/src/app.pcss";

    const pages: string[] = ['home', 'profile', 'search']
</script>

<header class="">
    <Title>Pelada Score</Title>
    
    {#each pages as page}
    <Button href="/{page}" variant="secondary">{ToTitle(page)}</Button>
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