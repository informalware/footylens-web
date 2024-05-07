<script lang="ts">
	import type { Review, User, Commentary } from '$lib/data/types';
	import { backend_address } from '$lib/consts';
	import Subtitle from '$lib/components/texts/subtitle.svelte';
	import { page } from '$app/stores';
	import axios from 'axios';
	import RatingDisplay from '$components/review/rating-display.svelte';
	import { stringToDate } from '$lib/str_utils';
	import AuthorDisplay from '$components/review/author-display.svelte';

    let id = $page.params.id

    async function review_req(): Promise<Review> {
        const res = await axios.get(backend_address + `/reviews/${id}`);

        return {...res.data}
    }
    // Solicita o autor ao backend
    async function author_req (id: any): Promise<User> {
        const res = await axios.get(backend_address + `/users/${id}`);

        return {...res.data}
    }

    async function all_commentaries_req() {
        const res = await axios.get(backend_address + `/reviews/${id}/commentaries`);

        return {...res.data}
    }

    async function commentary_req(id: any): Promise<Commentary> {
        const res = await axios.get(backend_address + `/commentaries/${id}`);

        return {...res.data}
    }
</script>

{#await review_req() then review}
    {#await author_req(review.userId) then author}
    <p>Partida: {review.matchId}</p>
    
    <div class="review-container">
        <AuthorDisplay author={author} date={review.creationDate} />
        <p>{review.review}</p>
        <RatingDisplay rating={review.rating} />
    </div>
    
    <Subtitle left>Comentários</Subtitle>
    <div class="comments-container">
        {#await all_commentaries_req() then comment_list}
        {#each comment_list.commentaries as cid}
        {#await commentary_req(cid) then commentary}
        <p>{commentary.id} - {commentary.commentary}</p>
        {/await}
        {/each}
        {/await}
    </div>
    {/await}
{/await}

<style>
    .review-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: hsl(var(--accent));
        margin: 1rem;
        padding: 2rem;
        border-radius: 0.5rem;
    }
    .comments-container {
        margin: 2rem;
    }
</style>