export interface Cat {
    id: string;
    url: string;
}

export interface CatState {
    cats: Cat[];
    favorites: Cat[];
    page: number;
    addCats: (cats: Cat[]) => void;
    toggleFavorite: (cat: Cat) => void;
    incrementPage: () => void;
}