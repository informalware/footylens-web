<script lang="ts">
	import CardHeader from '$components/ui/card/card-header.svelte';
	import Card from "$components/ui/card/card.svelte";
    import type { Event } from "$lib/data/types";
	import CardTitle from '$components/ui/card/card-title.svelte';
	import CardDescription from '$components/ui/card/card-description.svelte';
	import { User as UserIcon } from 'lucide-svelte';
    import "../../../app.pcss";
    import { goto } from '$app/navigation';
    import CardContent from '$components/ui/card/card-content.svelte';
    import Icon from '@iconify/svelte';

    import { event_as_number } from '$lib/data/types';

    export let event: Event;
</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-96">
    <Card>
        <CardHeader>
            <div class="flex flex-row gap-4">
                <UserIcon />
                <div>
                    <CardTitle>
                        {event.player}
                        <div class="inline-flex flex-row">
                            {#if event_as_number(event.event) === 4}
                            <Icon icon="zondicons:hand-stop" />
                            {/if}
                            {#if event_as_number(event.event) === 2}
                            <Icon icon="mdi:card" color="red" />
                            {/if}
                            {#if event_as_number(event.event) === 1}
                            <Icon icon="mdi:card" color="yellow"/>    
                            {/if}
                        </div>
                    </CardTitle>
                    <CardDescription>{event.moment}"</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <div class="grid place-items-center" style="grid-template-columns: 2rem auto;">
                {#if event_as_number(event.event) === 3}
                <Icon icon="ph:soccer-ball" inline />
                {/if}
            </div>
        </CardContent>
    </Card>
</div>


<style>
    .w-96 {
        max-width: 15rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
    }
</style>