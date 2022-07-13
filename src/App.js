import './App.css';
import { APP_ID , APP_KEY} from './key';
import Axios from 'axios';

function App() {
  let query = `apple`;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&imageSize=REGULAR`;

  async function getRecipe() {
    let recipe = await Axios.get(url);
    console.log(recipe.data);
  }

  return (
    <div className="App">
      {/* <header className="App-header">    
      </header> */}
    <h1>Recipe Finder</h1>
    <form className='searchForm'>
        <input type="text" placeholder='search ingredient'></input>
       
    </form>
      <button onClick={getRecipe}>plz click</button>
    </div>
  );
}

export default App;
