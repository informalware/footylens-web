export type Match = {
    id: number, 
    home: string, 
    visitor: string, 
    score: number[],
    started_at: Date,
    finished: Date | undefined
}

/**
 * Representa uma entidade, seja usuário, equipe ou campeonato. 
 * Guarda apenas os dados necessários, demais informações devem ser solicitadas ao back-end sob demanda
 */
export type User = {
    id: string
    display: string
}

export type MatchStats = {
    goals: number,
    assists: number | undefined,
    yellow_cards: 0 | 1 | 2 | undefined,
    red_card: boolean | undefined,
    injury: boolean | undefined
};