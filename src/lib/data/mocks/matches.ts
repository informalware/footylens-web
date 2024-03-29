import type { Match, Team } from "../types";
import { getUser } from "./users";

const camisinha1: Team = {
    name: 'Camisinha FC',
    goals: 72,
    squad: [
        {user: getUser("leomessi") , stats: {goals: 69, assists: 3, keeper: false, yellow_cards: 0, red_card: false, injury: false}},
        {user: getUser("ojarrisonn_") , stats: {goals: 3, assists: 1, keeper: true, yellow_cards: 0, red_card: false, injury: true}},
    ]
}

const camisinha2: Team = {
    name: 'Camisinha FC',
    goals: 70,
    squad: [
        {user: getUser("leomessi") , stats: {goals: 69, assists: 1, keeper: false, yellow_cards: 0, red_card: false, injury: false}},
        {user: getUser("ojarrisonn_") , stats: {goals: 1, assists: 1, keeper: true, yellow_cards: 0, red_card: false, injury: true}},
    ]
}

const hospital1: Team = {
    name: 'Hospital',
    goals: 1,
    squad: [
        {user: getUser("rossman") , stats: {goals: 1, assists: 0, keeper: false, yellow_cards: 0, red_card: false, injury: true}},
        {user: getUser("duvanel") , stats: {goals: 0, assists: 1, keeper: true, yellow_cards: 0, red_card: false, injury: false}},
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
    },{
        id: 1,
        home: camisinha2,
        visitor: hospital1,
        started_at: new Date("2024-03-28T08:00:00"),
        finished: new Date("2024-03-28T09:00:00")
    },
]