<script lang="ts">
	import Title from "$components/texts/Title.svelte";
	import Button from "$components/buttons/Button.svelte";
    import { ToTitle } from "$lib/str_utils";

    const pages: string[] = ['home', 'profile', 'search']
</script>

<header>
    <Title>Pelada Score</Title>
    
    {#each pages as page}
    <Button href="/{page}">{ToTitle(page)}</Button>
    {/each}
</header>
