import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware
} from "redux";
import { dataReducer } from "./Data/reducer";
import thunk  from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; 

const root = combineReducers({
  data: dataReducer,
});

export const store = createStore(
  root,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

console.log("inital State", store.getState());
