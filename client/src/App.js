import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import PokemonDetail from './components/PokemonDetails/PokemonDetails'
import Pokemons from './components/Pokemons/Pokemons'
import Creation from './components/Creation/Creation' 
import Error404 from './components/Error404/Error404'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
    </div>
  );
}

export default App;
