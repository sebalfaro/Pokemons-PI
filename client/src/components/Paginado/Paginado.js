import React from "react";
import './Paginado.css'

const Paginado = ({ pokemonsPerPage, allPokemons, paginado }) => {
  const pageNumber = []
  console.log('pagenumber ', pageNumber);

  for (let index = 1; index <= Math.ceil(allPokemons/pokemonsPerPage); index++) {
    pageNumber.push(index)
  }

  return(
    <nav className="paginado_box">
      <ul className="paginado_ul">
        { pageNumber && pageNumber.map(number =>{
          return (
            <div className="number_box" key={'div'+number}>
              <li className="number" key={number}>
                <a onClick={() => paginado(number)}>{number}</a>
              </li>
            </div>
          );
        })} 
      </ul>
    </nav>
  )
};

export default Paginado;
