<script lang="ts">
	import CardHeader from '../ui/card/card-header.svelte';
	import Card from "$components/ui/card/card.svelte";
    import type { Team } from "$lib/data/types";
	import CardTitle from '$components/ui/card/card-title.svelte';
	import CardDescription from '$components/ui/card/card-description.svelte';
	import { Shield as TeamIcon } from 'lucide-svelte';
    import "../../../app.pcss";
    import { goto } from '$app/navigation';
	import axios from 'axios';
	import { backend_address } from '$lib/consts';

    export let teamid: number;
    let team: Team;

    function navigateToTeamPage() {
        goto(`/teams/${team.id}`);
    }
    async function getTeam(id: number) {
        const req = await axios.get(backend_address + `/teams/${id}`);

        team = req.data
    }
</script>

<div class="w-96" role="button" tabindex="0" aria-label="View team page" on:click={navigateToTeamPage} on:keydown={navigateToTeamPage}>
    <Card>
        <CardHeader>
            <div class="flex flex-row gap-4">
                <TeamIcon />
                {#await getTeam(teamid)}
                    <p>Loading...</p>    
                {:then _dc} 
                <div>
                    <CardTitle>{team.name}</CardTitle>
                    <CardDescription>{team.league}</CardDescription>
                </div>
                {/await}
            </div>
        </CardHeader>
    </Card>
</div>


<style>

</style>