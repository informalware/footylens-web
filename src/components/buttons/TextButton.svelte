<script lang="ts">
    import { createEventDispatcher, type EventDispatcher } from "svelte";

    const dispatch: EventDispatcher<MouseEvent> = createEventDispatcher();
    
</script>

<button on:click={(event: MouseEvent) => dispatch('click', event)}>

</button>