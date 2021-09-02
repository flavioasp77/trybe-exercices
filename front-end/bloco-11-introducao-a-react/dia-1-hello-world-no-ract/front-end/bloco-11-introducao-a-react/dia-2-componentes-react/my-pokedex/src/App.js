import pokemons from './data';
import Pokedex from './Pokemon';

function App() {
  
  return (
    <div className="App">
      <Pokedex pokemons={ pokemons }/>
    </div>
  );
}

export default App;
