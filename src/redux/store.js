import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const store = createStore(
  combineReducers({
   
const orderList = (state = [], action) => {
  if (action.type === 'ADD_PIZZA') {
    let newOrderList = action.payload;
    return [...state, newOrderList];
  }
  return state;
}

const store = createStore(
  combineReducers({
    orderList, 
  }),
  applyMiddleware(logger),
);


export default store;
