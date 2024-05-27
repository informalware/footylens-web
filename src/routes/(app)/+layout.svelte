<script lang="ts">
	import '../../app.pcss';
	import { req_user } from '$lib/requests';
	import Header from '$components/header.svelte';
    import UserAside from '$components/user-aside.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Header />

<div class="body-layout">
	{#await req_user(Number(data.props.user_session)) then user}
    	<UserAside user={ user }/>
	{/await}
	<main>
		<slot />
	</main>
</div>

<style>

	:root {
		font-family: sans-serif;
		font-size: 14px;
		color: whitesmoke;
		min-height: 100%;
	}

    .body-layout {
        display: flex;
        flex-direction: row;
        min-height: 100vh; /* Adjust as needed */
    }

    main {
        flex-grow: 1;
		padding: 2rem;
    }
</style>
