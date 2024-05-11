/**
 * Guarda dados de usuário que permitam ele a ser
 */
export type User = {
    id: number;

    display: string;
    bio: string;
    username: string;
    email: string;
}

/**
 * Objeto com dados de uma partida
 */
export type Match = {
    id: number, 
    
    home: Team, 
    visitor: Team, 
    started_at: Date,
    finished: Date | undefined
}

/**
 * Equipe (basicamente a lista de jogadores) de uma partida
 */
export type Team = {
    id: number,
    name: string,
    league: string
}


export type Review = {
    id: number, 
    matchId: number,
    userId: number,
    rating: Rating,
    review: string,
    creationDate: string | undefined,
    lastModifiedDate: string | undefined
}

export type Commentary = {
    id: number,
    reviewId: number,
    userId: number,
    commentary: string,
    creationDate: string | undefined,
    lastModifiedDate: string | undefined
}

export enum Rating {
    TERRIBLE,
    BAD,
    OK,
    GOOD,
    AMAZING,
}

export function rating_as_number(rating: Rating): number {
    const str = rating.toString();
    if (str == "TERRIBLE") return 1;
    if (str == "BAD") return 2;
    if (str == "OK") return 3;
    if (str == "GOOD") return 4;
    if (str == "AMAZING") return 5;
    return 0;
}