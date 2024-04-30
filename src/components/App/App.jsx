import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import { useDispatch } from 'react-redux';
import axios from 'axios';

import './App.css';
import Customer from './Customer';
import Checkout from './Checkout';
import Order from './Order';




// function App() {

//   const orderList = useSelector(store => store.orderList);

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1 className='App-title'>Prime Pizza</h1>
//       </header>
//       <div className='pages'>
//         <ul className='nav'>
//         </ul>
//         <Route></Route>
//         <Route exact path="/">
//           <Check />
//         </Route>


//       </div>
//     </div>
//   );

  function App() {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
          </header>
          <nav className='nav'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/order">Order</Link></li>
              <li><Link to="/customer">Customer</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
            </ul>
          </nav>
          <div className='pages'>
            <Route exact path="/" component={Order} />
            <Route path="/order" component={Order} />
            <Route path="/customer" component={Customer} />
            <Route path="/checkout" component={Checkout} />
          </div>
        </div>
      </Router>
    );
  }







export default App;
