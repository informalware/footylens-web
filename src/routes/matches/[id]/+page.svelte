<script lang="ts">
	import Timer from '$lib/components/scoreboard/timer.svelte';
	import { page } from "$app/stores";
	import TeamGoalsDisplay from '$components/scoreboard/team-goals-display.svelte';
    
	import AuthorDisplay from '$components/review/author-display.svelte';
    import RatingDisplay from '$components/review/rating-display.svelte';
    import { req_review, req_match_review, req_match } from '$lib/requests';

    let id = Number($page.params.id)
</script>

<!--
@component

Página para exibição de dados de uma partida especificada pela rota dinâmica `/match/[id]`

-->
{#await req_match(id) then match}
    <div class="match-block">
        <TeamGoalsDisplay match={match}/>

        {#await req_match_review(id) then review_list}
        {#each review_list.reviews as rid}
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
{/await}

<style>
    .match-block {
        width: 100%;
        max-width: 500px;
    }

    .home {
        place-self: end;
        border-radius: 50px;
        background-color: hsl(var(--accent));
    }

    .away {
        place-self: start;
        border-radius: 50px;
        background-color: hsl(var(--accent));
    }
</style>


<!--
            <a href="">
                <TeamGoalsDisplay team={match.visitor} huge/>
            </a>
-->