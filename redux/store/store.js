import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '@/redux/reducer/reducer'
import {configureStore} from "@reduxjs/toolkit";
const store = createStore(ShopApp, applyMiddleware(thunkMiddleware));

export default store;