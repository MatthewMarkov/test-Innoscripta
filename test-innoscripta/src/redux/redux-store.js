import pizzaReducer from "./pizza-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    pizzaManager: pizzaReducer
})

export default createStore(rootReducer, (applyMiddleware(thunk)))