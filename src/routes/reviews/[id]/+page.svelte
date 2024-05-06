<script lang="ts">
	import type { Review, User, Commentary } from '$lib/data/types';
	import { backend_address } from '$lib/consts';
	import Title from '$lib/components/texts/title.svelte';
	import Subtitle from '$lib/components/texts/subtitle.svelte';
	import { page } from '$app/stores';
	import axios from 'axios';

    let id = $page.params.id

    async function review_req(): Promise<Review> {
        const res = await axios.get(backend_address + `/reviews/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: {}
        });

        return {...res.data}
    }
    // Solicita o autor ao backend
    async function author_req (id: any): Promise<User> {
        const res = await axios.get(backend_address + `/users/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: {}
        });

        return {...res.data}
    }

    async function all_commentaries_req(): Promise<any> {
        const res = await axios.get(backend_address + `/reviews/${id}/commentaries`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: {}
        });

        return {...res.data}
    }

    async function commentary_req(id: any): Promise<Commentary> {
        const res = await axios.get(backend_address + `/commentaries/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: {}
        });

        return {...res.data}
    }
</script>

{#await review_req() then review}
    {#await author_req(review.userId) then author}
    <Title>Review de {author.display}</Title>
    <Subtitle>{review.creationDate}</Subtitle>

    <p>Nota: {review.rating}</p>
    <p>Partida: {review.matchId}</p>
    <p>{review.review}</p>
    <Subtitle>Comentários</Subtitle>
        {#await all_commentaries_req() then comment_list}
            {#each comment_list as cid}
                {#await commentary_req(cid) then commentary}
                    <p>{commentary.id} - {commentary.commentary}</p>
                {/await}
            {/each}
        {/await}
    {/await}
{/await}
