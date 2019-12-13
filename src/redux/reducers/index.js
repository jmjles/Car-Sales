import { combineReducers } from "redux";
import FunctionReducer from "./featureReducer";

const reducer = combineReducers({
  featureFunc: FunctionReducer
});

export default reducer;
