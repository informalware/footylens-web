<script lang="ts">
    import MatchCard from "$components/scoreboard/team-goals-display.svelte";
    import RatingDisplay from '$components/review/rating-display.svelte';
    import AuthorDisplay from '$components/review/author-display.svelte';
    import CommentaryCard from '$components/review/commentary-card.svelte';
    import FeedMatchCard from '$components/scoreboard/feed-match-card.svelte';

    import { req_match, req_review, req_user_followers, req_user_follows, req_user_team_follows } from "$lib/requests";
    import { req_user_reviews, req_user_commentaries, req_team_matches } from "$lib/requests";

    import { Shield } from "lucide-svelte";	

    let id = Number(1);
</script>



<h1 class="main">O que está rolando na sua FootyRede?</h1>
<div class="feed-box">
    <div class="matches-box">
        {#await req_user_team_follows(id) then teams}
        <h1 class="second"> Partidas de times que você segue: </h1>
        {#each teams.teams as tid}
        {#await req_team_matches(tid) then matches}
        {#each matches.matches.slice(-3) as mid}
        {#await req_match(mid) then match}
        <FeedMatchCard match={match}/>
        {/await}
        {/each}
        {/await}
        {/each}
        {/await}
    </div>
    <div class="revs-and-comms-box">
        {#await req_user_follows(id) then users}
        {#each users.follows as uid}
        <div class="reviews-box">
        <h1 class="second"> Reviews de quem você segue: </h1>
        {#await req_user_reviews(uid) then reviews}
        {#each reviews.reviews.slice(-3) as rid}
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
        <div class="comms-box">
            <h1 class="second"> Comentários de quem você segue: </h1>
            {#await req_user_commentaries(uid) then commentaries}
            {#each commentaries.commentaries.slice(-3) as cid}
            <CommentaryCard id={cid} />
            {/each}
            {/await}
        </div>
        {/each}
        {/await}
    </div>

</div>



<style>
    .feed-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        max-width: 1200px;

        flex-wrap: wrap;
    }

    .matches-box {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;
        gap: 38px;
    }

    .matches-box > * {
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


    .main {
        font-weight: bolder;
        font-size: 2rem;

    }

    .second {
        font-weight: bold;
        font-size: 20px;
    }

    .review-container {
        margin-top: 1rem;
        padding: 1rem;
        border: 1px solid hsl(0, 0%, 80%);
        border-radius: 5px;
    }
</style>