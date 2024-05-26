<script lang="ts">
	import '../../app.pcss';
	import Header from '$components/header.svelte';
    import UserAside from '$components/user-aside.svelte';
    import {data as UserMock} from '$lib/data/mocks/profiles';
</script>

<Header />

<div class="body-layout">
    <UserAside user={ UserMock[1] }/>
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
