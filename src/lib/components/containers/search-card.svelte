<script lang="ts">
	import CardHeader from './../ui/card/card-header.svelte';
	import Card from "$components/ui/card/card.svelte";
    import type { Entity } from "$lib/data/types";
	import CardTitle from '$components/ui/card/card-title.svelte';
	import CardDescription from '$components/ui/card/card-description.svelte';
	import { Shield, Trophy, User } from 'lucide-svelte';
    import "../../../app.pcss";
    import { goto } from '$app/navigation';

    export let entity: Entity;

    function navigateToEntity() {
        goto(`/${entity.type}/${entity.id}`);
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-96" on:click={navigateToEntity} on:keydown={navigateToEntity}>
    <Card>
        <CardHeader>
            <div class="flex flex-row gap-4">
                {#if entity.type === "profile"}
                <User />
                {:else if entity.type === "team"}
                <Shield />
                {:else}
                <Trophy />
                {/if}
                <div>
                    <CardTitle>{entity.display}</CardTitle>
                    <CardDescription>@{entity.id}</CardDescription>
                </div>
            </div>
        </CardHeader>
    </Card>
</div>
