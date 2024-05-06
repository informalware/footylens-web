<script lang="ts">
	import CardHeader from '../ui/card/card-header.svelte';
	import Card from "$components/ui/card/card.svelte";
    import type { User } from "$lib/data/types";
	import CardTitle from '$components/ui/card/card-title.svelte';
	import CardDescription from '$components/ui/card/card-description.svelte';
	import { User as UserIcon } from 'lucide-svelte';
    import "../../app.pcss";
    import { goto } from '$app/navigation';

    export let user: User;

    function navigateToUserProfile() {
        goto(`/users/@${user.at}`);
    }
</script>

<div class="w-96" role="button" tabindex="0" aria-label="View user profile" on:click={navigateToUserProfile} on:keydown={navigateToUserProfile}>
    <Card>
        <CardHeader>
            <div class="flex flex-row gap-4">
                <UserIcon />
                <div>
                    <CardTitle>{user.name}</CardTitle>
                    <CardDescription>@{user.id}</CardDescription>
                </div>
            </div>
        </CardHeader>
    </Card>
</div>


<style>

</style>