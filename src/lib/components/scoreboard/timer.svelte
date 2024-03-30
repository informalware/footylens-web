<script lang="ts">
	import type { Match } from "$lib/data/types";
	import { millisToString } from "$lib/str_utils";
	import { AlarmClock, AlarmMinus } from "lucide-svelte";
	import { onMount } from "svelte";

    export let initial: number;
    export let finished: number | undefined = undefined;
    export let huge: boolean = false;

    let elapsed: string = '';

    $: clock_size = huge ? '1.5rem' : '1.125rem'

    onMount(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diffInMilliseconds = now.getTime() - initial;
            elapsed = millisToString(diffInMilliseconds);            
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<!--
@component

Temporizador de uma partida
- `initial: number`: momento (obtido com getTime()) em que a partida iniciou
- `finished: number | undefined`: momento (obtido com getTime()) em que a partida terminou. Se `undefined` significa que a partida não terminou, portanto o tempo decorrido é exibido
- `huge: boolean`: modifica a formatação do time para um formato grande
-->

<p class="{huge ? 'text-xl' : ''}" style="padding: 1rem;">
    {#if finished === undefined}
    <AlarmClock class="inline" size={clock_size} color="#ff0000"/> {elapsed}
    {:else}
    <AlarmMinus class="inline" size={clock_size} color="#fff"/> {millisToString(finished - initial)}
    {/if}
</p>