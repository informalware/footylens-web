<script lang="ts">
	import Button from "$components/ui/button/button.svelte";
	import { backend_address } from "$lib/consts";


</script>


<form action={"/reviews"} method="POST">
    <textarea class="review" name="review" required></textarea>
    <Button variant="secondary" type="submit" class="self-start">Publicar</Button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 1rem;
    }
    
    textarea {
        width: 100%;
        padding: 2rem;
        border-radius: 0.5rem;
        background-color: hsl(var(--accent));
    }
</style>