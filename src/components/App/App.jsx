import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';


function App() {

// const dispatch = useDispatch();

const [pizzaArray, setPizzaArray] = useState([]);

const [name, SetName] = useState('');
const [streetAddress, SetStreetAddress] = useState('');
const [city, SetCity] = useState('');
const [zip, SetZip] = useState('');


const addCustomer = event => {
  event.preventDefault();
  console.log('TEST adding customer information');

  // let action = { type: 'ADD_CUSTOMER'}

}

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

  const dispatch = useDispatch();
  const addPizza = () => { 
    console.log(`Adding Pizza`, {pizzaArray});
    let action = { type: 'ADD_PIZZA', payload: {pizzaArray} };
    dispatch(action);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
<h1>Step 2: Customer Information</h1>

<input required placeholder="Name" value={name} ></input>
<input required placeholder="Street Address" value={streetAddress} ></input>
<input required placeholder="City" value={city} ></input>
<input required placeholder="Zip" value={zip} ></input>
<button onClick={addCustomer} type="Submit">Submit</button>

      {pizzaArray.map((pizza) => (
      
      <li key ={pizza.id}>

        <p>{pizza.name} {pizza.description} {pizza.price} <img src = {pizza.image_path} /> </p>
        <button onClick={addPizza}>Add To Order</button>
      </li>

      ))}

    </div>
  );
}

export default App;
