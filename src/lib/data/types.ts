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
 * Guarda dados de usuário que permitam ele a ser
 */
export type User = {
    id: string
    display: string
}

/**
 * Equipe (basicamente a lista de jogadores) de uma partida
 */
export type Team = {
    name: string,
    goals: number,
    squad: Player[]
}

/**
 * Jogador, junção de um usuário com suas estatísticas de jogo
 */
export type Player = {
    user: User,
    stats: MatchStats
}

/**
 * Estatísticas de partida para um jogador
 */
export type MatchStats = {
    goals: number,
    assists: number | undefined,
    keeper: boolean | undefined
    yellow_cards: 0 | 1 | 2 | undefined,
    red_card: boolean | undefined,
    injury: boolean | undefined
};