import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getPokemonByID } from "../../redux/actions/actions";
import axios from "axios";
import { useParams } from "react-router-dom";
import Logo from '../Logo/Logo'
import PokemonDetailCard from "../PokemonDetailCard/PokemonDetailCard";
import './PokemonDetails.css'

const PokemonDetails = (props) => {

  const { idPokemon } = useParams()
  // const dispatch = useDispatch()
  // let pokemon = useSelector((state)=> state.pokemon)
  
  const [pokemon, setPokemon] = useState({});
  


  useEffect(() => {
    // dispatch(getPokemonByID(idPokemon))
    axios.get(`http://localhost:3001/pokemons/${idPokemon}`)
      .then(({ data }) =>{
        setPokemon(data)
      })

    return () => {
      setPokemon({})
    };
  }, []);



  return (
    <main>
      <Logo />
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
