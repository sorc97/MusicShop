import { 
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { products } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    products
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => console.log(store.getState()));
store.subscribe(() =>
  localStorage['musicShop-cart'] = JSON.stringify(
    store.getState().products.cart
  )
)

export default store;