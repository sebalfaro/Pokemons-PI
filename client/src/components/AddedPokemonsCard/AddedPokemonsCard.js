import React from "react";
import { TypeCard } from "../TypeCard/TypeCard";

const AddedPokemonsCard = ({name, img, hp, id, attack, defense, speed, height, weight, types}) => {
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

export default AddedPokemonsCard;
