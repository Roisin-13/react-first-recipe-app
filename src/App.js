import './App.css';
import { APP_ID, APP_KEY} from './key';
import Axios from 'axios';

function App() {
  let query = "apple";
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&imageSize=REGULAR`;

  async function getRecipe() {
    let recipe = await Axios;
  }

  return (
    <div className="App">
      {/* <header className="App-header">    
      </header> */}
    <h1>Recipe Finder</h1>
    </div>
  );
}

export default App;
