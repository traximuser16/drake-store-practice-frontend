import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducer/reducer";

const finalReducer = combineReducers({
    rootReducer,
});

const middleware = [thunk];

const store = createStore(
    finalReducer,
    // intialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
