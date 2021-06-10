import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories.js';
import productsReducer from './products.js';
// import { thunk } from 'reduc-thiunk';

import thunk from './middleware/thunk.js';
import reducer from './reducers.js';

let reducers = combineReducers({
  data: reducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();