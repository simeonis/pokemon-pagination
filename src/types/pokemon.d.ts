export interface IPokemonRecord {
    id: string;
    name: string;
    height: number;
    weight: number;
    species: {
        genera: {
            genus: string;
        };
    };
    sprites: {
        official_artwork_front_default: string;
    };
    stats: {
        name: string;
        base_stat: number; 
    }[];
    types: {
        name: string;
    }[];
    abilities: {
        name: string;
        is_hidden: boolean;
    }[];
}
