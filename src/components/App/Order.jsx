import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Order() {
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
    
      const dispatch = useDispatch();
      const addPizza = () => { 
        console.log(`Adding Pizza`, {pizzaArray});
        let action = { type: 'ADD_PIZZA', payload: {pizzaArray} };
        dispatch(action);
      }

    return(
        <ol>
        {
            pizzaArray.map((pizza) => (
      
            <li key ={pizza.id}>
      
              <p>{pizza.name} {pizza.description} {pizza.price} <img src = {pizza.image_path} /> </p>
              <button onClick={addPizza}>Add To Order</button>
            </li>
      
            ))}
        </ol>
    )
}

export default Order;