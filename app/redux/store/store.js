import { createStore, applyMiddleware, legacy_createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '@/app/redux/reducer/reducer'

const store = createStore(ShopApp, applyMiddleware(thunkMiddleware));

export default store;