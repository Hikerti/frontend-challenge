import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {CatState} from "../types/types.ts";

export const useCatStore = create<CatState>()(
    persist(
        (set) => ({
            cats: [],
            favorites: [],
            page: 0,
            addCats: (newCats) => set((state) => ({
                cats: [...state.cats, ...newCats]
            })),
            incrementPage: () => set((state) => ({
                page: state.page + 1
            })),
            toggleFavorite: (cat) => set((state) => {
                const isFav = state.favorites.some((f) => f.id === cat.id);
                return {
                    favorites: isFav
                        ? state.favorites.filter((f) => f.id !== cat.id)
                        : [...state.favorites, cat],
                };
            }),
        }),
        {
            name: 'cat-storage',
            partialize: (state) => ({ favorites: state.favorites }),
        }
    )
);