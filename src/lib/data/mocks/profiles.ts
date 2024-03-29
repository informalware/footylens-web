import type { User } from "../types";
import type { Team } from "../types";

import { team as teams } from "$lib/data/mocks/teams"

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
    
]