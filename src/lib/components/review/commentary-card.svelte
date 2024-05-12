<script lang="ts">
	import { req_commentary } from "$lib/requests";
	import AuthorDisplay from "./author-display.svelte";

    export let id: number;
</script>

<div>
    {#await req_commentary(id) then commentary}
        <AuthorDisplay id={commentary.userId} date={commentary.creationDate}/>
        <p>{commentary.commentary}</p>
    {/await}
</div>