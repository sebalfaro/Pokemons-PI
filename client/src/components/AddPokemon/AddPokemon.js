import React from "react";
import { useSelector } from "react-redux";
import AddedPokemonsCard from "../AddedPokemonsCard/AddedPokemonsCard";
import AddForm from "../AddForm/AddForm";
import Logo from "../Logo/Logo";
import './AddPokemon.css'

const AddPokemon = () => {

  let pokemonsAdded = useSelector((state)=> state.pokemonsAdded)

  return (
    <main className="addpokemon_box" >
      <Logo size='small'/>
      <h1>Add Pokemon</h1>
      <section className="addpokemon_section_box">
        <AddForm />
        <div className="addpokemon_addedbox">
          {
            pokemonsAdded.length > 0
              ? <div className="addpokemon_added_title"><h1>Pokemons Added Queue</h1></div>
              : null
          }
          {pokemonsAdded?.map((pokemon) => (
            <AddedPokemonsCard {...pokemon} key={"added_" + pokemon.name} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AddPokemon;
