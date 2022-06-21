import React from "react";
import './AddedPokemonsCard.css'

const AddedPokemonsCard = ({name, img, hp, id, attack, defense, speed, height, weight, types}) => {
  return (
    <div className="addedpokemonscard_box">
      <div className="addedpokemonscard_box_img_box">
        <img src={img} alt={`${name}_img`} />
      </div>
        <h4>{name}</h4>
      <div className="addedpokemonscard_data">
        <div className="addedpokemonscard_data_column">
        <p><b>HP: </b>{hp}</p>
        <p><b>Attack: </b>{attack}</p>
        <p><b>Defense: </b>{defense}</p>
        <p><b>Speed: </b>{speed}</p>
        </div>
        <div className="addedpokemonscard_data_column">
        <p><b>Height: </b>{height}</p>
        <p><b>Weight: </b>{weight}</p>
        <p><b>Types: </b>
        {types &&
          types.map(({ id, type }) => {
            return <span key={'p_' + id}>{type} </span>
          })}
        </p>
        </div>
      </div>
    </div>
  );
};

export default AddedPokemonsCard;
