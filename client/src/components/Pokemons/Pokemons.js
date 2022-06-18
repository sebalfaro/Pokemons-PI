import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import PokemonsSlider from "../PokemonsSlider/PokemonsSlider";
import FilterMenu from "../FilterMenu/FilterMenu";

const Pokemons = () => {

  return (
    <main>
      <h1>Pokemons</h1>
      <SearchBar />
      <FilterMenu />
      <PokemonsSlider />
    </main>
  );
};

export default Pokemons;
