import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import allProducts from './allProducts';
import singleProduct from './singleProduct';
import cart from './cart';

import orderId from './orderId';

import users from './users';

const reducer = combineReducers({ auth, allProducts, singleProduct, cart, users, orderId });


const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
