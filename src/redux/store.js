import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
// const addCustomerInfo = (state = [], action) => {
//   if(action.type === 'ADD_CUSTOMER') 
  
//   return state;

// }

const store = createStore(
  combineReducers({
   
  }),
  applyMiddleware(logger),
);


export default store;
