<script lang="ts">
    import Match from "$components/containers/match-card.svelte";
	import MatchFeed from "$components/containers/match-feed.svelte";
    import { data as matches } from "$lib/data/mocks/matches";

    let i: number = 0;
</script>

<!--
Página home do site onde o usuário poderá ver o seu feed
-->

<MatchFeed loader={async () => {
    if (i >= matches.length) throw new Error("No more matches");

    const value = matches[i];
    i++;
    return value;
}}/>