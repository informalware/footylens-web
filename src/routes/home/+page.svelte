<script lang="ts">
    import Match from "$lib/components/containers/feed-match.svelte";
    import { data as matches } from "$lib/mocks/matches";
</script>

<!--
Página home do site onde o usuário poderá ver o seu feed
-->

<div class="gap-4 flex flex-col items-center ">
    {#each matches as match}
    <div style="width: 32rem;">
        <Match match={match} />
    </div>
    {/each}
</div>