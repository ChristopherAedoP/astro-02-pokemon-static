import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favoritePokemons") ?? "[]",
    );

    const newFavorites = favorites.filter(
      (favorite: FavoritePokemon) => favorite.id !== pokemon.id,
    );
    localStorage.setItem("favoritePokemons", JSON.stringify(newFavorites));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img 
            width="96" 
            height="96" 
            src={imageSrc} 
            alt={pokemon.name} 
            style={`view-transition-name: ${pokemon.name}-image;`}
            />
          <p class="capitalize">
            {" "}
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button onClick={deleteFavorite} class="text-red-400">
          Borrar
        </button>
      </div>
    </Show>
  );
};
