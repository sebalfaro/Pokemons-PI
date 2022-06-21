
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getAllPokemons } from "../../redux/actions/actions";
import PokemonCard from "../PokemonCard/PokemonCard";
import Paginado from '../Paginado/Paginado';
import './PokemonsSlider.css'

const PokemonsSlider = () => {

  const dispatch = useDispatch()
  const pokemons = useSelector((state)=> state.filteredPokemons)
  const allPokemons = useSelector((state)=> state.filteredPokemons)
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
  const indexOfLastPokemon = currentPage * pokemonsPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

  const paginado = (pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getAllPokemons())
  }, []);

  
  
  return (
    <section className='pokemonslider_box'>
      <div className='pokemonslider_page'>
      {
        pokemons.length > 0
          ?currentPokemons.map((el) => {
              if(!el){
                console.log('un pokemon es null')
                return null
              } else {
                return <PokemonCard img={el.img} name={el.name} types={el.types} key={el.id} id={el.id}/>;
              }
            })
          : <p>Loading...</p>
      }
      </div>
      <Paginado pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginado={paginado}/>
    </section>
  );
};

export default PokemonsSlider;
