<script lang="ts">
	import CardHeader from './ui/card/card-header.svelte';
	import Card from "$components/ui/card/card.svelte";
    import type { User } from "$lib/data/types";
	import CardTitle from '$components/ui/card/card-title.svelte';
	import CardDescription from '$components/ui/card/card-description.svelte';
	import { User as UserIcon } from 'lucide-svelte';
    import "../../app.pcss";
    import { goto } from '$app/navigation';

    export let user: User;

    function navigateToEntity() {
        goto(`/profile/${user.id}`);
    }
</script>

<!--
@component

Elemento a ser exibido na tela de busca para mostrar informações sobre um usuário e permitindo o acesso ao perfil do mesmo

- `user: User`: usuário cujas informações serão exibidos

-->

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-96" on:click={navigateToEntity} on:keydown={navigateToEntity}>
    <Card>
        <CardHeader>
            <div class="flex flex-row gap-4">
                <UserIcon />
                <div>
                    <CardTitle>{user.display}</CardTitle>
                    <CardDescription>@{user.id}</CardDescription>
                </div>
            </div>
        </CardHeader>
    </Card>
</div>
