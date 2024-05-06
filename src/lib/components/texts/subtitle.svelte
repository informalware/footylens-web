<script lang="ts">
    export let left: boolean = false;
</script>

<h2 class={left ? "text-left" : "text-center"}><slot /></h2>

<style>
    h2 {
        font-size: 2rem;
        font-weight: bold;
        background-color: transparent;
    }
</style>