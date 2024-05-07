<script lang="ts">
	import { goto } from "$app/navigation";
	import { req_user } from "$lib/requests";
	import { stringToDate } from "$lib/str_utils";
	import Subtitle from "../texts/subtitle.svelte";
    import { User as UserIcon } from "lucide-svelte";

    export let id: number;
    export let date: string | undefined;
    $: formatted_date = stringToDate(date);

    function navigateToUserProfile(username: string) {
        goto(`/users/@${username}`);
    }
</script>

{#await req_user(id) then user}
<div role="button" tabindex="0" aria-label="View user profile" on:click={() => navigateToUserProfile(user.username)} on:keydown={() => navigateToUserProfile(user.username)}>
    <Subtitle left><UserIcon class="inline"/> {user.display}</Subtitle>
        {#if formatted_date}
        <p>{formatted_date}</p>
        {/if}
    </div>
{/await}

