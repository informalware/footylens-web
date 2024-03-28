import type { Match, Team } from "../types";
import { getUser } from "./users";

const camisinha1: Team = {
    name: 'Camisinha FC',
    goals: 72,
    squad: [
        {user: getUser("ojarrisonn_") , stats: {goals: 3, assists: 1, keeper: true, yellow_cards: 0, red_card: false, injury: true}},
        {user: getUser("leomessi") , stats: {goals: 69, assists: 3, keeper: false, yellow_cards: 0, red_card: false, injury: false}},
    ]
}

const hospital1: Team = {
    name: 'Hospital',
    goals: 0,
    squad: [
        {user: getUser("duvanel") , stats: {goals: 0, assists: 0, keeper: true, yellow_cards: 0, red_card: false, injury: false}},
        {user: getUser("rossman") , stats: {goals: 0, assists: 0, keeper: false, yellow_cards: 0, red_card: false, injury: true}},
    ]
}

export function getMatch(id: number): Match {
    return matches.filter(match => match.id === id)[0];
}

export const matches: Match[] = [
    {
        id: 0,
        home: camisinha1,
        visitor: hospital1,
        started_at: new Date("2024-03-28T08:00:00"),
        finished: undefined
    },
]