import type { User } from "../types";

export function getUser(id: string): User {
    return users.filter(value => value.id === id)[0];
}

export const users: User[] = [
    {
        id: "ojarrisonn_",
        display: "Harrisonn"
    }, {
        id: "yamal",
        display: "Lamine Yamal"
    }, {
        id: "duvanel",
        display: "T.Duvanel"
    }, {
        id: "rossman",
        display: "Lais Nuto (Taylor's Version)"
    }, {
        id: "tokokunawara",
        display: "Tokokunawara"
    }, {
        id: "leomessi",
        display: "Lionel Messi"
    }
];