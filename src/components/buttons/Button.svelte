<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    
</script>

<button on:click={() => dispatch('click')}>
    <slot></slot>
</button>

<style>
    button {
        padding: 1rem;
        border-radius: 1rem;
        background-color: whitesmoke;
    }
</style>