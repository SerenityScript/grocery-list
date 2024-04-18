import './App.css';
import groceryImg from './grocery.jpg';
import bagImg from './bag.png';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <img src={ groceryImg } className='groceryImage' alt='shopping' />
      </div>
      <h1>Grocery List</h1>
      <GroceryList/>
      <img className='Bag' src={ bagImg } width='130px' alt='shopping bag' />
    </div>
  );
}

export default App;
