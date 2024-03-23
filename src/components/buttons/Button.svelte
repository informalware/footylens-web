<script lang="ts">
	import { createEventDispatcher } from "svelte";

    export let href: string | null = null;

    const dispatch = createEventDispatcher();
</script>

<!--
@component
    
Um componente de botão genérico que suporta o evento `on:click` ou um `href` para redirecionar o usuário para outra página (capacidades mutualmente excludentes)

# Atributos

`href?: string` - link para onde redirecionar o usuário (opcional)
`on:click: ` - evento `on:click` do botão
-->

{#if href}
<a href={href}>
    <slot />
</a>
{:else}
<button on:click={() => dispatch('click')}>
    <slot />
</button>
{/if}

<style>
    a, button {
        background-color: whitesmoke;
        border-radius: 1rem;
        border-style: solid;
        border-color: gray;
        border-width: 0.125rem;
        font-family: sans-serif;
        font-size: 1rem;
        text-decoration: none;
        color: black;
        padding: .5rem;
    }

    a:hover, button:hover {
        cursor: pointer;
        background-color: gray;
        border-color: whitesmoke;
        color: white;
    }
</style>