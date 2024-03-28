<<<<<<< HEAD

interface Team {
    id: number;

    name: string;
}

interface Match {
    id: number;
    duration: number;

    team1: Team;
    team2: Team;

    score1: number;
    score2: number;

    date: Date;
    location: string;
}

interface Tournament {
    matches: Match[];

    teams: Team[];
    places: Team[];
}


interface User {
    id: number;

    name: string;
    bio: string;
    at: string;
    email: string;
    
    team: Team;
    friends: string[];
    following: number;
=======

interface Team {
    id: number;

    name: string;
}

interface Match {
    id: number;
    duration: number;

    team1: Team;
    team2: Team;

    score1: number;
    score2: number;

    date: Date;
    location: string;
}

interface Tournament {
    matches: Match[];

    teams: Team[];
    places: Team[];
}


interface User {
    id: number;

    name: string;
    at: string;
    email: string;
    
    team: Team;
    friends: string[];
>>>>>>> 0751677 (Base para os tipos)
}