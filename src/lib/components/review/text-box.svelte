<script lang="ts">
	import { page } from "$app/stores";
	import TeamGoalsDisplay from '$components/scoreboard/team-goals-display.svelte';
    
	import AuthorDisplay from '$components/review/author-display.svelte';
    import EventCard from '$components/scoreboard/event-card.svelte';
    import RatingDisplay from '$components/review/rating-display.svelte';
    import { req_review, req_match_review, req_match } from '$lib/requests';
    import { writable } from 'svelte/store';

    let id = Number($page.params.id)
</script>


<form action="/post-review" method="post">
    <textarea class="review" name="review" required></textarea>
    <button class="submit">Postar</button>
</form>
