import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import PokemonsSlider from "../PokemonsSlider/PokemonsSlider";
import FilterMenu from "../FilterMenu/FilterMenu";
import './Pokemons.css'

const Pokemons = () => {

  return (
    <main className="pokemons_main">
      <div className="pokemons_main_logo">
        <h1>Pokemons</h1>
      </div>
      <SearchBar />
      <section className="pokemons_main_slider">
        <FilterMenu />
        <PokemonsSlider />
      </section>
    </main>
  );
};

export default Pokemons;
