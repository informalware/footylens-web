<script lang="ts">
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
            <TextBox />
            {#await req_match_review(id) then review_list}
            {#each review_list.reviews.slice(-3) as rid}
            {#await req_review(rid) then review}
            <div class="review-container">
                <AuthorDisplay id={review.userId} date={review.creationDate} />
                <p>{review.review}</p>
                <RatingDisplay rating={review.rating} />
            </div>
            {/await}
            {/each}
            {/await}
        </div>
    </div>
{/await}


<style>
    .match-block {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;

        flex-wrap: wrap;
    }

    .gols {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;
        gap: 38px;
    }

    .gols > * {
        flex: 1 0 50%;
    }

    .reviews-box {
        margin-top: 1.5rem;
        margin-left: 2rem;
        flex: 1 1 500px;
    }

    .review-container {
        margin-top: 1rem;
        padding: 1rem;
        border: 1px solid hsl(0, 0%, 80%);
        border-radius: 5px;
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
