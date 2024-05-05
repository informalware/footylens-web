<script lang="ts">
	import '../app.pcss';
	import Header from '$components/header.svelte';
    import UserAside from '$components/user-aside.svelte';
    import {data as UserMock} from '$lib/data/mocks/profiles';
</script>

<Header />
<UserAside user={ UserMock[1] }/>
<slot />

<style>
	:root {
		font-family: sans-serif;
		font-size: 14px;
		color: whitesmoke;
		min-height: 100%;
	}
</style>
