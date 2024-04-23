import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const orderList = (state = [], action) => {
  if (action.type === 'ADD_PIZZA') {
    let newOrderList = action.payload;
    return [...state, newOrderList];
  }
  return state;
}

const customerInformation = (state = '', action) => {
  if (action.type === 'ADD_CUSTOMER') {
    return action.payload;
  }

  return state;
}

const store = createStore(
  combineReducers({
    orderList, 
    customerInformation,
  }),
  applyMiddleware(logger),
);


export default store;
