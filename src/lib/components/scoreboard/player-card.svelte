<script lang="ts">
	import CardHeader from '$components/ui/card/card-header.svelte';
	import Card from "$components/ui/card/card.svelte";
    import type { Player } from "$lib/data/types";
	import CardTitle from '$components/ui/card/card-title.svelte';
	import CardDescription from '$components/ui/card/card-description.svelte';
	import { User as UserIcon } from 'lucide-svelte';
    import "../../../app.pcss";
    import { goto } from '$app/navigation';
    import CardContent from '$components/ui/card/card-content.svelte';
    import Icon from '@iconify/svelte';

    export let player: Player;
    $: user = player.user;
    $: stats = player.stats;

    function navigateToProfile() {
        goto(`/profile/${player.user.id}`);
    }
</script>

<!--
@component

Exibe informações sobre um jogador específico em um cartão a ser usado em telas de partida

- `player: Player`: o jogador cujas informações serão exibidas
-->

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-96" on:click={navigateToProfile} on:keydown={navigateToProfile}>
    <Card>
        <CardHeader>
            <div class="flex flex-row gap-4">
                <UserIcon />
                <div>
                    <CardTitle>
                        {user.display}
                        <div class="inline-flex flex-row">
                            {#if stats.keeper}
                            <Icon icon="zondicons:hand-stop" />
                            {/if}
                            {#if stats.red_card}
                            <Icon icon="mdi:card" color="red" />
                            {/if}
                            {#each Array(stats.yellow_cards ?? 0) as _}
                            <Icon icon="mdi:card" color="yellow"/>    
                            {/each}
                            {#if stats.injury}
                            <Icon icon="icon-park-solid:cross-society" color="red" />
                            {/if}
                        </div>
                    </CardTitle>
                    <CardDescription>@{user.id}</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <div class="grid place-items-center" style="grid-template-columns: 2rem auto;">
                <Icon icon="ph:soccer-ball" inline />
                <p class="place-self-start">{stats.goals} gol{stats.goals > 1 ? 's' : ''}</p>
                {#if stats.assists !== undefined}
                <Icon icon="mingcute:foot-line" inline />
                <p class="place-self-start">{stats.assists} assistência{stats.assists > 1 ? 's' : ''}</p>
                {/if}
            </div>
        </CardContent>
    </Card>
</div>
