import React from "react";
import { useSelector } from "react-redux";
import AddedPokemonsCard from "../AddedPokemonsCard/AddedPokemonsCard";
import AddForm from "../AddForm/AddForm";
import './AddPokemon.css'

const AddPokemon = () => {

  let pokemonsAdded = useSelector((state)=> state.pokemonsAdded)

  return (
    <main>
      <h1>Add Pokemon</h1>
      <AddForm />
      {
        pokemonsAdded?.map(pokemon => <AddedPokemonsCard {...pokemon} key={pokemon.name}/>)
      }
    </main>
  );
};

export default AddPokemon;
