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

export type UserRegistry = {
    display: string;
    username: string;
    email: string;
    password: string;
}

export type Scoreboard = {
    first: number,
    second: number
}

export enum EventTypes {
    YELLOW, 
    RED, 
    GOAL, 
    PENALTY
}

export function event_as_number(eventtype: EventTypes): number {
    const str = eventtype.toString();
    if (str == "YELLOW") return 1;
    if (str == "RED") return 2;
    if (str == "GOAL") return 3;
    if (str == "PENALTY") return 4;
    return 0;
}

export type Event = {
    id: number,

    event: EventTypes,
    moment: number,
    player: string,
    matchId: number,
    teamId: number
}

/**
 * Objeto com dados de uma partida
 */
export type Match = {
    id: number, 
    
    home: number, 
    away: number, 
    scoreboard: Scoreboard
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