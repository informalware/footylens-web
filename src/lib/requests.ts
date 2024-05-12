import axios from "axios";
import { backend_address } from "./consts";
import type { Commentary, Review } from "./data/types";
import type { Team, Match } from "./data/types";
import type { User } from "lucide-svelte";

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