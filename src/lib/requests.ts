import axios from "axios";
import { backend_address } from "./consts";
import type { Commentary, Review } from "./data/types";
import type { User } from "lucide-svelte";

export async function req_commentary(id: number): Promise<Commentary> {
    const res = await axios.get(backend_address + `/commentaries/${id}`);

    return {...res.data}
}

export async function req_commentaries_from_review(id: number) {
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