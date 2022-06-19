
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getAllPokemons } from "../../redux/actions/actions";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonsSlider = () => {

  const dispatch = useDispatch()
  let pokemons = useSelector((state)=> state.filteredPokemons)

  useEffect(() => {
    dispatch(getAllPokemons())
  }, []);
  
  console.log(pokemons)
  
  return (
    <section>
      {
        pokemons.length > 0
          ?pokemons.map(({ img, name, types, id}) => {
              return <PokemonCard img={img} name={name} types={types} key={id} id={id}/>;
            })
          : <p>Loading...</p>
      }
    </section>
  );
};

export default PokemonsSlider;
