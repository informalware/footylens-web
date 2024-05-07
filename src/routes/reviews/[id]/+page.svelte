<script lang="ts">
	import Subtitle from '$lib/components/texts/subtitle.svelte';
	import { page } from '$app/stores';
	import RatingDisplay from '$components/review/rating-display.svelte';
	import AuthorDisplay from '$components/review/author-display.svelte';
	import CommentaryCard from '$components/review/commentary-card.svelte';
	import { req_review, req_user, req_commentaries_from_review } from '$lib/requests';

    let id = Number($page.params.id)
</script>

{#await req_review(id) then review}
    <p>Partida: {review.matchId}</p>
    
    <div class="review-container">
        <AuthorDisplay id={review.userId} date={review.creationDate} />
        <p>{review.review}</p>
        <RatingDisplay rating={review.rating} />
    </div>
    
    <Subtitle left>Comentários</Subtitle>
    <div class="comments-container">
        {#await req_commentaries_from_review(review.id) then comment_list}
        {#each comment_list.commentaries as cid}
        <CommentaryCard id={cid} />
        {/each}
        {/await}
    </div>
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
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>