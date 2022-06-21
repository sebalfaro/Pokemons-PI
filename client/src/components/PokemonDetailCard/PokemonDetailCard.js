import React from "react";
import Spinner from "../Spinner/Spinner";
import { TypeCard } from "../TypeCard/TypeCard";
import './PokemonDetailCard.css'

const PokemonDetailCard = (props) => {

  const { id, name, hp, attack, defense, speed, height, weight, img, types } = props

  return (
    <section className="pokemondetailcard_box">
      { id? (
        <>
          <div className="pokemondetailcard_info">
            <div className="pokemondetailcard_info_name">
              <h2>{name}</h2>
            </div>
            <div className="pokemondetailcard_info_stats">
              <b>HP</b>
              <p>{hp}</p>
              <b>ID</b>
              <p>{id}</p>
              <b>Attack</b>
              <p>{attack}</p>
              <b>Defense</b>
              <p>{defense}</p>
              <b>Speed</b>
              <p>{speed}</p>
              <b>Heigth</b>
              <p>{height}</p>
              <b>Weigth</b>
              <p>{weight}</p>
              <b>Types</b>

              <div className="pokemondetailcard_types_box">
                {types &&
                  types.map(({ id, type }) => {
                    return <TypeCard key={"t_" + id} type={type} />;
                  })}
              </div>
            </div>
          </div>

          <div className="pokemondetailcard_img_box">
            <img src={img} alt={`${name}_img`} />
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default PokemonDetailCard;
