/**
 * Guarda dados de usuário que permitam ele a ser
 */
export type User = {
    id: number;

    name: string;
    bio: string;
    at: string;
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