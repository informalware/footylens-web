<script lang="ts">
	import type { User } from "$lib/data/types";
	import { stringToDate } from "$lib/str_utils";
	import Subtitle from "../texts/subtitle.svelte";
    import { User as UserIcon } from "lucide-svelte";

    export let author: User;
    export let date: string | undefined;
    $: formatted_date = stringToDate(date);
</script>

<div>
    
    <Subtitle left><UserIcon class="inline"/> {author.display}</Subtitle>
    {#if formatted_date}
    <p>{formatted_date}</p>
    {/if}
</div>

