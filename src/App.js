import './App.css';
import { APP_ID , APP_KEY} from './key';
import Axios from 'axios';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState("");
  //let query = `apple`;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&imageSize=REGULAR`;

  async function getRecipe() {
    let recipe = await Axios.get(url);
    console.log(recipe.data);
  }
  const handleClick = (event) => {
    event.preventDefault();
    getRecipe();
    document.getElementsByClassName("searchIngredient")[0].value="";
  }
  return (
    <div className="App">
      {/* <header className="App-header">    
      </header> */}
    <h1>Recipe Finder</h1>
    <form className="searchForm">
        <input type="text" className="searchIngredient" placeholder="search ingredient" value={query} onChange={(event) => setQuery(event.target.value)}></input>
        <button type="submit" value="plz click" onClick={handleClick} >plz click</button>
    </form>
      {/* <button onClick={getRecipe}>plz click</button> */}
    </div>
  );
}

export default App;
