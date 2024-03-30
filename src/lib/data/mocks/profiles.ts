import type { User } from "../types";

import { data as teams } from "$lib/data/mocks/teams"

export const data: User[] = [
    {
        id: 1,
        name: "Thiago Duvanel",
        bio: "Calvo",
        at: "th-duvanel",
        email: "thiago.duvanel@usp.br",
        
        team: teams[0],
        following: 10
    },
    {
        id: 2,
        name: "John Doe",
        bio: "Lorem ipsum",
        at: "john-doe",
        email: "john.doe@example.com",
        team: teams[1],
        following: 5
    },
    {
        id: 3,
        name: "Jane Smith",
        bio: "Dolor sit amet",
        at: "jane-smith",
        email: "jane.smith@example.com",
        team: teams[2],
        following: 8
    },
    {
        id: 4,
        name: "Alex Johnson",
        bio: "Consectetur adipiscing elit",
        at: "alex-johnson",
        email: "alex.johnson@example.com",
        team: teams[0],
        following: 12
    },
    {
        id: 5,
        name: "Harrisonn Thomes",
        bio: "ah n sei oq n sei q la",
        at: "ojarrisonn",
        email: "ojarrisonn@gmail.com",
        team: teams[0],
        following: 6969
    }
]