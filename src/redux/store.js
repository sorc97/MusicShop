import { 
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { products, sort } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    products,
    sort
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => console.log(store.getState()));

export default store;