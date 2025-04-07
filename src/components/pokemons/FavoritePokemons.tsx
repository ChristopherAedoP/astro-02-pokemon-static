import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCart";


const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const pokemons = JSON.parse(
    localStorage.getItem("favoritePokemons") ?? '[]'
  )
  return pokemons;
};


export const FavoritePokemons = () => {
    const [pokemons, serPokemons] = createSignal(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            <For each={ pokemons() }>
                {
                    (pokemon) => <FavoritePokemonCard pokemon={pokemon} />
                }
            </For>
        </div>
    )

}