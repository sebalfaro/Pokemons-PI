import React from "react";
import { Link } from "react-router-dom";
import { TypeCard } from "../TypeCard/TypeCard";
import './PokemonCard.css'

const PokemonCard = ({img, name, types, id}) => {

  return (
    <div className="pokemoncard_box">
      <Link to={`/pokemons/${id}`}>
        <div className="pokemoncard_img-box">
          <img src={img} alt={`${name}_img`} />
        </div>
        <div className="pokemoncard_data">
          <h3>{name}</h3>
          <h4>Types</h4>
          <div className="pokemoncard_types">
            {types.map((type) => {
              return <TypeCard type={type.type} key={'pkcard_types_' + type.id} />;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
