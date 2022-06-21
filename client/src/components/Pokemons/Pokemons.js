import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import PokemonsSlider from "../PokemonsSlider/PokemonsSlider";
import FilterMenu from "../FilterMenu/FilterMenu";
import Logo from "../Logo/Logo";
import './Pokemons.css'

const Pokemons = () => {

  return (
    <main className="pokemons_main">
      <Logo />
      <SearchBar />
      <section className="pokemons_main_slider">
        <FilterMenu />
        <PokemonsSlider />
      </section>
    </main>
  );
};

export default Pokemons;
