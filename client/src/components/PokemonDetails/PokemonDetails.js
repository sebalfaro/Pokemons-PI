import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { URL_GET_POKEMON_BY_ID } from "../../constants/routes";
import Logo from '../Logo/Logo'
import PokemonDetailCard from "../PokemonDetailCard/PokemonDetailCard";
import './PokemonDetails.css'

const PokemonDetails = (props) => {

  const { idPokemon } = useParams()  
  const [pokemon, setPokemon] = useState({});
  
  useEffect(() => {

    axios.get(`${URL_GET_POKEMON_BY_ID}` + idPokemon)
      .then(({ data }) =>{
        setPokemon(data)
      })

    return () => {
      setPokemon({})
    };
  }, []);

  return (
    <main className="pokemondetails_main">
      <Logo size='small'/>
      <section className="pokemondetail_box">
        <h1>Pokemon Details</h1>
        {pokemon.error ? (
          <p>{pokemon.error}</p>
        ) : (
          <PokemonDetailCard {...pokemon} />
        )}
      </section>
    </main>
  );
};

export default PokemonDetails;
