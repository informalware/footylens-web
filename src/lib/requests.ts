import axios from "axios";
import { backend_address } from "./consts";
import type { Team, Match, Event, User, Commentary, Review, UserRegistry } from "./data/types";


export async function req_commentary(id: number): Promise<Commentary> {
    const res = await axios.get(backend_address + `/commentaries/${id}`);

    return {...res.data}
}

export async function req_commentaries_from_review(id: number): Promise<{commentaries: number[]}>{
    const res = await axios.get(backend_address + `/reviews/${id}/commentaries`);

    return {...res.data}
}

export async function req_review(id: number): Promise<Review> {
    const res = await axios.get(backend_address + `/reviews/${id}`);

    return {...res.data}
}

export async function req_user(id: number): Promise<User> {
    const res = await axios.get(backend_address + `/users/${id}`);

    return {...res.data}
}

export async function req_user_by_username(username: string): Promise<User> {
    const res = await axios.get(backend_address + `/users/@${username}`);

    return {...res.data}
}

export async function req_user_reviews(id: number): Promise<{reviews: number[]}> {
    const res = await axios.get(backend_address + `/users/${id}/reviews`);

    return {...res.data}
}

export async function req_user_commentaries(id: number): Promise<{commentaries: number[]}> {
    const res = await axios.get(backend_address + `/users/${id}/commentaries`);

    return {...res.data}
}

export async function req_team(id: number): Promise<Team> {
    const res = await axios.get(backend_address + `/teams/${id}`);

    return {...res.data}
}

export async function req_team_matches(id: number): Promise<{matches: number[]}>{
    const res = await axios.get(backend_address + `/teams/${id}/matches`);

    return {...res.data}
}

export async function req_team_followers(id: number): Promise<{followers: number[]}>{
    const res = await axios.get(backend_address + `/teams/${id}/followers`);

    return {...res.data}
}

export async function req_match(id: number): Promise<Match> {
    const res = await axios.get(backend_address + `/matches/${id}`);

    return {...res.data}
}

export async function req_match_review(id: number): Promise<{reviews: number[]}>{
    const res = await axios.get(backend_address + `/matches/${id}/reviews`);

    return {...res.data}
}

export async function req_match_events(id: number): Promise<{events: Event[]}>{
    const res = await axios.get(backend_address + `/matches/${id}/details`);

    return {...res.data}
}

export async function req_user_followers(id: number): Promise<{followers: number[]}>{
    const res = await axios.get(backend_address + `/users/${id}/followers`);

    return {...res.data}
}

export async function req_user_follows(id: number): Promise<{follows: number[]}>{
    const res = await axios.get(backend_address + `/users/${id}/follows`);

    return {...res.data}
}

export async function req_user_team_follows(id: number): Promise<{follows: number[]}>{
    const res = await axios.get(backend_address + `/users/${id}/teams`);

    return {...res.data}
}


export async function post_user(user: UserRegistry){
    await axios.post(backend_address + "/users", user);
}

export async function update_user(id: number, user: User){
    await axios.put(backend_address + `/users/${id}`, user);
}

export async function post_user_follows_team(user_id: number, team_id: number){
    await axios.post(backend_address + `/users/${user_id}/teams`, {team_id: team_id});
}

export async function delete_user_unfollows_team(user_id: number, team_id: number){
    await axios.delete(backend_address + `/users/${user_id}/teams/${team_id}`);
}

export async function post_user_follows_user(user_id: number, follows_id: number){
    await axios.post(backend_address + `/users/${user_id}/follows`, {follows_id: follows_id});
}

export async function delete_user_unfollows_user(user_id: number, follows_id: number){
    await axios.delete(backend_address + `/users/${user_id}/follows/${follows_id}`);
}

export async function post_review(review: Review){
    await axios.post(backend_address + "/reviews", review);
}

export async function post_commentary(commentary: Commentary){
    await axios.post(backend_address + "/commentaries", commentary);
}
