<script lang="ts">
export let left: boolean = false;
</script>

<h1 class={left ? "text-left" : "text-center"}><slot /></h1>

<style>
    h1 {
        font-size: 2rem;
        font-weight: bold;
        background-color: transparent;
    }
</style>