import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getAllPokemons } from "../../redux/actions/actions";
import PokemonCard from "../PokemonCard/PokemonCard";
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
