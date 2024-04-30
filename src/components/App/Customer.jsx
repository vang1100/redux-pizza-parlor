import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Customer() {
    const [name, SetName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, SetCity] = useState('');
    const [zip, SetZip] = useState('');

    const dispatch = useDispatch();

    const addCustomer = event => {
        event.preventDefault();
        console.log('TEST adding customer information');
        let action = { type: 'ADD_CUSTOMER', payload: { name, streetAddress, city, zip }};
        dispatch(action);
      }
    

      return (
        <div className = "customer-information">
            <h1>Customer Information</h1>
            <input required placeholder="Name" value={name} ></input>
            <input required placeholder="Street Address" value={streetAddress} ></input>
            <input required placeholder="City" value={city} ></input>
            <input required placeholder="Zip" value={zip} ></input>
            <button onClick={addCustomer} type="Submit">Submit</button>
        </div>
      )
}


export default Customer;