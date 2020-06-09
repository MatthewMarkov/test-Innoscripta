import pizzaReducer from "./pizza-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    pizzaManager: pizzaReducer,
    form: formReducer

})

export default createStore(rootReducer, (applyMiddleware(thunk)))