<lucide-script lang="ts">
	import CardHeader from '../ui/card/card-header.svelte';
	import Card from "$components/ui/card/card.svelte";
    import type { User } from "$lib/data/types";
	import CardTitle from '$components/ui/card/card-title.svelte';
	import CardDescription from '$components/ui/card/card-description.svelte';
	import { User as UserIcon } from 'lucide-svelte';
    import "../../../app.pcss";
    import { goto } from '$app/navigation';
	import axios from 'axios';
	import { backend_address } from '$lib/consts';
	import { error } from '@sveltejs/kit';

    export let userid: number;
    let user: User;

    function navigateToUserProfile() {
        goto(`/users/@${user.username}`);
    }

    async function getUser(id: number) {
        const req = await axios.get(backend_address + `/users/${id}`);

        user = req.data
    }
</script>

<div class="w-96" role="button" tabindex="0" aria-label="View user profile" on:click={navigateToUserProfile} on:keydown={navigateToUserProfile}>
    <Card>
        <CardHeader>
            <div class="flex flex-row gap-4">
                <UserIcon />
                {#await getUser(userid)}
                    <p>Loading...</p>    
                {:then _dc}                 
                    <div>
                        <CardTitle>{user.display}</CardTitle>
                        <CardDescription>@{user.username}</CardDescription>
                    </div>
                {/await}
            </div>
        </CardHeader>
    </Card>
</div>


<style>

</style>