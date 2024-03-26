<script lang="ts">
    export let team: string;
    export let score: number;
    export let right: boolean = false;
</script>

<!--
@component

Elemento do scoreboard com dados de uma equipe
- `right: boolean`: alinhar os textos à direita
- `team: string`: nome do time
- `score: number`: gols marcados
-->

<div class="justify-center items-center w-56 {right && 'text-right'}">
    <p class="text-2xl font-medium">{team}</p>
    <p class="text-4xl font-black">{score}</p>
</div>