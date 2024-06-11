<script lang="ts">
	import { enhance } from '$app/forms';
	import Textarea from './../../../../lib/components/ui/textarea/textarea.svelte';
	import { page } from "$app/stores";
    import type { Review } from '$lib/data/types';
	import TeamGoalsDisplay from '$components/scoreboard/team-goals-display.svelte';
    import TextBox from '$components/review/text-box.svelte';
	import AuthorDisplay from '$components/review/author-display.svelte';
    import EventCard from '$components/scoreboard/event-card.svelte';
    import RatingDisplay from '$components/review/rating-display.svelte';
    import { req_review, req_match_events, req_match_review, req_match } from '$lib/requests';
    import { post_review } from '$lib/requests';
    import { backend_address } from "$lib/consts";
	import type { PageData } from "./$types";
	import Button from "$components/ui/button/button.svelte";
    
    export let data: PageData;

    let id = Number($page.params.id)
    let review: Review;
</script>

<!--
@component

Página para exibição de dados de uma partida especificada pela rota dinâmica `/match/[id]`

-->

{#await req_match(id) then match}
    <div class="match-block">
        <div class="gols">
            <TeamGoalsDisplay match={match}/>
            {#await req_match_events(id) then match_events}
            {#each match_events.events as event}
                <EventCard event={event}/>
            {/each}
            {/await}
        </div>

        <div class="reviews-box">
            <h1 class="title">Poste sua FootyReview dessa partida: </h1>
            <form method="POST" use:enhance>
                <input type="hidden" name="matchId" value={id} />
                <Textarea name="review" placeholder="Escreva sua review..." style="margin-bottom: 0.5rem;"></Textarea>
                <Button variant="secondary" type="submit" class="self-start">Publicar</Button>
            </form>
            <div class="gap-4 flex flex-col items-left" style="margin-top: 0.5rem;">
                {#await req_match_review(id) then review_list}
                {#each review_list.reviews.slice(-3) as rid}
                    {#await req_review(rid) then review}
                    <a href={`/reviews/${rid}`}>
                        <div class="review-container">
                            <AuthorDisplay id={review.userId} date={review.creationDate} />
                                <p>{review.review}</p>
                            <RatingDisplay rating={review.rating} />
                        </div>
                    </a>
                    {/await}
                {/each}
                {/await}
            </div>
        </div>
    </div>
{/await}


<style>
    #review {
        width: 100%;
        padding: 2rem;
        border-radius: 0.5rem;
        background-color: hsl(var(--accent));
    }

    .rating {
        display: inline-flex;
        direction: rtl;
    }
    .rating input {
        display: none;
    }
    .rating label {
        font-size: 2em;
        color: gray;
        cursor: pointer;
    }
    .rating input:checked ~ label {
        color: gold;
    }

    .match-block {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 1200px;

        flex-wrap: wrap;
    }

    .gols {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;
        gap: 38px;
    }

    .reviews-box {
        margin-top: 1.5rem;
        margin-left: 2rem;
        flex: 1 1 500px;
    }

    .review-container {
        background-color: hsl(var(--accent));
        padding: 13px;
        border-radius: 12px;
    }

    .last-matches {
        margin-left: 200px;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 2rem;
    }

    @media (max-width: 1024px) {
        .match-block {
            justify-content: center;
        }

        .gols, .reviews-box {
            flex: 1 0 100%;
        }
    }
</style>
