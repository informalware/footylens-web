import type { User } from "../types";

/**
 * Obtem um usuário da lista de usuários mockados
 * @param id id do jogador
 * @returns o jogador (ou undefined se o id não tiver sido definido)
 */
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