export type Match = {
    id: number, 
    home: string, 
    visitor: string, 
    score: number[],
    started_at: Date,
    finished: Date | undefined
}

export const data: Match[] = [
    {
        id: 0,
        home: 'Camisinha FC',
        visitor: 'Hospital',
        score: [4, 0],
        started_at: new Date("2024-03-24T17:00:00"),
        finished: undefined
    },
    {
        id: 1,
        home: 'BKR',
        visitor: 'Japira',
        score: [3, 1],
        started_at: new Date("2024-03-24T17:10:00"),
        finished: new Date()
    },
    {
        id: 1,
        home: 'BKR',
        visitor: 'Japira',
        score: [3, 1],
        started_at: new Date("2024-03-24T17:10:00"),
        finished: new Date()
    },
    {
        id: 1,
        home: 'BKR',
        visitor: 'Japira',
        score: [3, 1],
        started_at: new Date("2024-03-24T17:10:00"),
        finished: new Date()
    },
    {
        id: 1,
        home: 'BKR',
        visitor: 'Japira',
        score: [3, 1],
        started_at: new Date("2024-03-24T17:10:00"),
        finished: new Date()
    },
    {
        id: 1,
        home: 'BKR',
        visitor: 'Japira',
        score: [3, 1],
        started_at: new Date("2024-03-24T17:10:00"),
        finished: new Date()
    }
]