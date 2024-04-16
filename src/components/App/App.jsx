import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {

const [pizzaArray, setPizzaArray] = useState([]);

  const grabPizza = () => {
    axios.get('/api/pizza').then(response => {
    console.log('data response', response.data);
    setPizzaArray(response.data);
    }).catch(error => {
      console.log('error in GET', error);
      alert('something went wrong in GET');
    });
  }

  useEffect(() => {
    grabPizza();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
  <ul>
      {pizzaArray.map((pizza) => (
      
      <li key ={pizza.id}>

        <p>{pizza.name} {pizza.description} {pizza.price} <img src = {pizza.image_path} /> </p>
      
      </li>

      ))}

  </ul>

    </div>
  );
}

export default App;
