<script lang="ts">
	import type { PageData } from './$types';

    import profile from '$assets/logo.png'
    import type { Review } from '$lib/data/types';
    import { page } from '$app/stores';
    import { req_team_followers, req_user } from '$lib/requests';
    import { req_user_follows, req_user_followers, delete_user_unfollows_user, post_user_follows_user } from '$lib/requests';
    import { req_user_reviews, req_review } from '$lib/requests';
    import { User as UserIcon } from 'lucide-svelte';

	import AuthorDisplay from "$lib/components/review/author-display.svelte";
    import RatingDisplay from "$lib/components/review/rating-display.svelte";

    export let data: PageData;

    let id = Number($page.params.id);
    let user_id = Number(data.props.user_session); 
    let user = req_user(id);
    let reviews : Review[] = [];
    let i = 0;
    let reviewsSize = 0;

    async function loadReviews() {
        const userReviews = await req_user_reviews(id);
        reviewsSize = userReviews.reviews.length;

        for (let j = 0; i < reviewsSize && j < 3 ; i++, j++) {
            const review = await req_review(userReviews.reviews[i]);
            reviews = [...reviews, review];
        }
    }

    loadReviews();
</script>


{#await user then user}
<main>
    <div class="profile-header">
        <div class="profile-image">
            <img src={profile} alt="Imagem do usuário"/>
        </div>
        <h1>{user?.display}</h1>
        <h2>@{user?.username}</h2>
        <p>{user?.bio}</p>
        <div class="peladeiros">
            <span>Seguidores:
            {#await req_user_followers(user.id) then followers}
                {followers.followers.length}
            {/await}
            </span>
        </div>
        <div class="peladeiros">
            <span>Seguindo:
            {#await req_user_follows(user.id) then follows}
                {follows.follows.length}
            {/await}   
            </span>   
        </div>
        {user_id}
        {id}
        {#await req_user_followers(id) then {followers}}
            {#if user_id != id}
                {#if followers.includes(user_id)}
                    <button class="Button active" on:click={async () => { await delete_user_unfollows_user(user_id, id) }}>Deixar de seguir</button>
                {:else}
                    <button class="Button" on:click={async () => { await post_user_follows_user(user_id, id) }}>Seguir</button>
                {/if}
            {/if}
        {/await}
    </div>
    <div class="gap-4 flex flex-col items-left last-matches" style="flex-grow: 1;">
        <h1>Reviews do usuário:</h1>

        {#each reviews as review (review.id)}
            <a href={`/reviews/${review.id}`}>
            <div class="review-container">
                <AuthorDisplay id={review.userId} date={review.creationDate} />
                <p>{review.review}</p>
                <RatingDisplay rating={review.rating} />
            </div>
            </a>
        {/each}

        {#if i < reviewsSize}
        <div class="container">
            <button class="Button" on:click={loadReviews}>Carregar mais reviews</button>
        </div>
        {:else}
            <p>Não há mais reviews.</p>
        {/if}
    </div>
</main>
{/await}


<style>
    main {
        padding: 4%;
        display: flex;
        justify-content: left;
        align-items: left;
        height: 100vh;
    }
    
    .profile-image {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    .last-matches {
        margin-left: 200px;
    }

    .review-container {
        background-color: hsl(var(--accent));
        padding: 13px;
        border-radius: 12px;
    }

    .profile-header {
        display: flex;
        flex-direction: column;
        align-items: left;
        text-align: left;

        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 18px;
        color: gray;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        margin-bottom: 20px;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .Button {
        background-color: hsl(var(--accent));
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        min-width: 150px;


        position: relative;
        margin-bottom: 1em;
    }

    .Button:hover {
        background-color: #0d2035;
    }

    .Button:active {
        background-color: #0d2035;
    }

    .peladeiros{
        display: flex;
        align-items: left;
        margin-bottom: 10px;
    }

    .peladeiros span {
        
        font-size: 16px;
        font-weight: bold;
        margin-right: 5px;
    }
</style>