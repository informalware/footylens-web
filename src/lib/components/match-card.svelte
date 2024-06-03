<script lang="ts">
    import * as Card from "$lib/components/ui/card";
	import type { Match } from "$lib/data/types";
	import { X } from "lucide-svelte";
    import TeamGoalsDisplay from "$components/scoreboard/team-goals-display.svelte";
	import Timer from './scoreboard/timer.svelte';

    export let match: Match;
</script>

<Card.Root>
    <Card.Header>
        <Card.Title>            
            <Timer initial={match.started_at.getTime()} finished={match.finished?.getTime()}/>
        </Card.Title>
        <Card.Description>
        </Card.Description>
    </Card.Header>
    <Card.Content>
        <div class="content">
            <TeamGoalsDisplay team={match.home}/>
            <X />
            <TeamGoalsDisplay team={match.visitor}/>
        </div>
    </Card.Content>
</Card.Root>

<style>
    .content {
        display: grid;
        grid-template-columns: 18rem 2rem 18rem;
    }
</style>