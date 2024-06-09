<script lang="ts">
    import RatingDisplay from '$components/review/rating-display.svelte';
    import AuthorDisplay from '$components/review/author-display.svelte';
    import CommentaryCard from '$components/review/commentary-card.svelte';
    import FeedMatchCard from '$components/scoreboard/feed-match-card.svelte'
    import type { PageData } from './$types';;

    import { req_match, req_review, req_user_followers, req_user_follows, req_user_team_follows } from "$lib/requests";
    import { req_user_reviews, req_user_commentaries, req_team_matches } from "$lib/requests";

    export let data: PageData;

    let id = Number(data.props.user_session);
</script>



<h1 class="main">O que está rolando na sua FootyRede?</h1>
<div class="feed-box">
    <div class="matches-box">
        {#await req_user_team_follows(id) then teams}
            <h1 class="second"> Partidas de times que você segue: </h1>
            {#each teams.follows.slice(-3) as tid}
                {#await req_team_matches(tid) then matches}
                    {#each matches.matches.slice(-1) as mid}
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
        <h1 class="second"> Reviews de quem você segue: </h1>
        <div class="reviews-box">
        {#await req_user_reviews(uid) then reviews}
        {#each reviews.reviews.slice(-3) as rid}
        {#await req_review(rid) then review}
            <a href="/reviews/{rid}">
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
        <h1 class="second"> Comentários de quem você segue: </h1>
        <div class="comms-box">
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
        max-width: 1440px;
        display: flex;
        justify-content: space-between;

        flex-wrap: wrap;
    }

    .matches-box {
        max-width: 50%;
        max-height: 1200px;
        display: flex;
        flex-wrap: wrap;
        gap: 38px;
    }

    .revs-and-comms-box {
        max-width: 50%;
        display: flex;
        flex-wrap: wrap;
        gap: 38px;
    }

    .revs-and-comms-box {
        max-width: 700px;
    }

    .matches-box > * {
        flex: 1 0 50%;
    }

    .reviews-box {
        margin-top: 3rem;
        flex: 1 1 500px;
    }

    .comms-box {
        margin-top: 1.5rem;
        flex: 1 1 500px;
    }

    .review-container {
        padding: 1rem;
        border: 1px solid hsl(0, 0%, 80%);
        border-radius: 5px;
        margin-bottom: 2rem;
    }


    .main {
        font-weight: bolder;
        font-size: 2rem;

    }

    .second {
        font-weight: bold;
        font-size: 20px;
    }
</style>