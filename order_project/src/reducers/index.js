import { combineReducers } from "redux";
import MenuReducer from "./MenuReducer";
import CartReducer from "./CartReducer";

const reducers = combineReducers({
  MenuReducer,
  CartReducer,
});

export default reducers;
