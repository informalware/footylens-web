export type Match = {
    id: number, 
    home: string, 
    visitor: string, 
    score: number[],
    started_at: Date,
    finished: Date | undefined
}
