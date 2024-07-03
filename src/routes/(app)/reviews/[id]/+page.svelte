<script lang="ts">
    import { enhance } from '$app/forms';
	import MatchScoreboard from '$components/scoreboard/team-goals-display.svelte';
	import Textarea from './../../../../lib/components/ui/textarea/textarea.svelte';
	import { page } from '$app/stores';
	import RatingDisplay from '$components/review/rating-display.svelte';
	import AuthorDisplay from '$components/review/author-display.svelte';
	import CommentaryCard from '$components/review/commentary-card.svelte';
	import { req_review, req_match, req_commentaries_from_review } from '$lib/requests';
    import { backend_address } from "$lib/consts";
	import type { Commentary } from '$lib/data/types';
    import type { PageData } from './$types';
    import Button from "$components/ui/button/button.svelte";

    export let data: PageData;

    let user_id = Number(data.props.user_session);
    let id = Number($page.params.id)
    let commentary: Commentary;
</script>

<div class="comms-box">
{#await req_review(id) then review}
    {#await req_match(review.matchId) then match} 
    <div class="flex justify-center">        
        <div style="max-width: 500px; flex: 1 1 500px;">
            <MatchScoreboard match={match} />
        </div>
    </div>
    {/await}

    <div class="review-container">
        <AuthorDisplay id={review.userId} date={review.creationDate} />
        <p>{review.review}</p>
        <RatingDisplay rating={review.rating} />
    </div>
    <h1 class="title">Comentários:</h1>
    <div class="comments-container">
        {#await req_commentaries_from_review(review.id) then comment_list}
        {#each comment_list.commentaries as cid}
        <CommentaryCard id={cid} />
        {/each}
        {/await}
    </div>
    <h1 class="title">Poste seu FootyComentário:</h1>
    <form method="POST" use:enhance>
        <input name="reviewId" type="hidden" value={id} />
        <Textarea name="commentary" placeholder="Escreva seu comentário..." style="margin-bottom: 0.5rem;"></Textarea>
        <Button variant="secondary" type="submit" class="self-start">Publicar</Button>
    </form>
{/await}
</div>

<style>
    .comms-box {
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 2rem;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 2rem;
    }

    .review-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: hsl(var(--accent));
        padding: 2rem;
        border-radius: 1rem;
    }
    .comments-container {
        margin: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>