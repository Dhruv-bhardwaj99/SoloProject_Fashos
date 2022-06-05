import {combineReducers, legacy_createStore as createStore} from "redux"
import { dataReducer } from "./Data/reducer";


const root = combineReducers({
    data: dataReducer
});

export const store = createStore(
    root, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("inital State", store.getState());