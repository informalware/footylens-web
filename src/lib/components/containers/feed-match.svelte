<script lang="ts">
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card";
	import type { Match } from "$lib/mocks/matches";
	import { millisToString } from "$lib/str_utils";
	import { AlarmClock, AlarmMinus, X } from "lucide-svelte";
    import SingleScore from "$lib/components/containers/scoreboard/singlescore.svelte";

    export let match: Match;

    let elapsed: string = '';

    onMount(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diffInMilliseconds = now.getTime() - match.started_at.getTime();
            elapsed = millisToString(diffInMilliseconds);            
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<!--
@component

Card usado para representar uma partida no feed do usuário. O card deve conter informações de:
- Seus amigos que estão jogando
- Data/Hora de início
- Tempo decorrido/fim de jogo
- Times e placar
- Estatísticas dos seus amigos
-->

<Card.Root>
    <Card.Header>
        <Card.Title>            
            {#if match.finished === undefined}
                <AlarmClock class="inline" size="1.125rem" color="#ff0000"/> {elapsed}
            {:else}
                <AlarmMinus class="inline" size="1.125rem" color="#fff"/> {millisToString(match.finished.getTime() - match.started_at.getTime())}
            {/if}
        </Card.Title>
        <Card.Description>
            {match.started_at.toLocaleDateString()} {match.started_at.toLocaleTimeString()}
        </Card.Description>
    </Card.Header>
    <Card.Content>
        <div class="flex flex-row gap-8">
            <SingleScore team={match.home} score={match.score[0]} right/>
            <X />
            <SingleScore team={match.visitor} score={match.score[1]}/>
        </div>
    </Card.Content>
</Card.Root>