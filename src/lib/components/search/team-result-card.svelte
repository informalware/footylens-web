<script lang="ts">
	import CardHeader from '../ui/card/card-header.svelte';
	import Card from "$components/ui/card/card.svelte";
    import type { Team } from "$lib/data/types";
	import CardTitle from '$components/ui/card/card-title.svelte';
	import CardDescription from '$components/ui/card/card-description.svelte';
	import { Shield as TeamIcon } from 'lucide-svelte';
    import "../../app.pcss";
    import { goto } from '$app/navigation';

    export let team: Team;

    function navigateToTeamPage() {
        goto(`/teams/${team.id}`);
    }
</script>

<div class="w-96" role="button" tabindex="0" aria-label="View team page" on:click={navigateToTeamPage} on:keydown={navigateToTeamPage}>
    <Card>
        <CardHeader>
            <div class="flex flex-row gap-4">
                <TeamIcon />
                <div>
                    <CardTitle>{team.name}</CardTitle>
                    <CardDescription>{team.league}</CardDescription>
                </div>
            </div>
        </CardHeader>
    </Card>
</div>


<style>

</style>