//import './App.css';
import React from 'react';
import { APP_ID , APP_KEY} from './key';
import Axios from 'axios';
import { useState } from 'react';
import { useStyles } from './styles';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const classes = useStyles();

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&imageSize=REGULAR`;

  async function getRecipe() {
    let recipe = await Axios.get(url);
    setRecipes(recipe.data.hits);
    console.log(recipe.data);
  }
  const handleClick = (event) => {
    event.preventDefault();
    getRecipe();
    document.getElementById('si').value="";
  }

  return (
    <div className={classes.App}>
      <h1 className={classes.h1}>Recipe Finder</h1>
    <form className={classes.searchForm}>
        <input type="text" className={classes.searchIngredient} id="si" placeholder="search ingredient" value={query} onChange={(event) => setQuery(event.target.value)}></input>

        <button type="submit" className={classes.searchButton} onClick={handleClick} >find recipes</button>
    </form>
    <div className={classes.recipeList}>
      {recipes.map(results => {
        return (
          <div className={classes.recipeBox}>
          <a href={results.recipe.url}>
              <img src={results.recipe.image} className={classes.recipeImg}></img>
            </a>
            <p className={classes.recipeP}>{results.recipe.label}</p>
          </div>
          );
      })}
    </div>
    </div>
  );
}

export default App;
