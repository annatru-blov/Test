import { legacy_createStore as createStore } from "redux";
import itemReducer from "./item-reducer";
import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

let reducers = combineReducers({
  itemPage: itemReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;
