import React from "react";
import { TypeCard } from "../TypeCard/TypeCard";

const PokemonDetailCard = (props) => {
  console.log('response', props);
  const { id, name, hp, attack, defense, speed, height, weight, img, types } = props


  return (
    <div>
      <h3>Pokemon info</h3>
      <img src={img} alt={`${name}_img`} />
      <h4>{name}</h4>
      <p>HP: {hp}</p>
      <p>ID: {id}</p>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <p>Speed: {speed}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      {
        types && types.map(({ id, type }) => {return <TypeCard key={id} type={type} /> })
      }
    </div>
  );
};

export default PokemonDetailCard;
