import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from 'redux-logger'
const middleWare = [thunk,logger]
const store = createStore(RootReducer,applyMiddleware(...middleWare));
export default store;
