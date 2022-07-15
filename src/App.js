import './App.css';
import { APP_ID , APP_KEY} from './key';
import Axios from 'axios';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&imageSize=REGULAR`;

  async function getRecipe() {
    let recipe = await Axios.get(url);
    setRecipes(recipe.data.hits);
    console.log(recipe.data);
  }
  const handleClick = (event) => {
    event.preventDefault();
    getRecipe();
    document.getElementsByClassName("searchIngredient")[0].value="";
  }

  return (
    <div className="App">
    <h1>Recipe Finder</h1>
    <form className="searchForm">
        <input type="text" className="searchIngredient" placeholder="search ingredient" value={query} onChange={(event) => setQuery(event.target.value)}></input>
        <button type="submit" value="plz click" onClick={handleClick} >find recipes</button>
    </form>
    <div>
      {recipes.map(results => {
        return (
          <>
          <a href={results.recipe.url}>
          <img src={results.recipe.image}></img>
            </a>
          <p>{results.recipe.label}</p>
          </>
          );
      })}
    </div>
    </div>
  );
}

export default App;
