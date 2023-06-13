import countReducers from "./countReducers";
import { todoReducers } from "./todoReducers";
import { combineReducers } from "redux";

const reducer=combineReducers({
    countReducers,
    todoReducers,
})

export default reducer