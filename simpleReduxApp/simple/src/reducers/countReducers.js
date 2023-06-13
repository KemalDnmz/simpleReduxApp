import { AllActionTypes } from "../actionTypes";

const initialState=0

const countReducers = (state = initialState,action) => {

    switch (action.type) {
        case AllActionTypes.counterTypes.INCREMENT:
            return state + action.payload
        case AllActionTypes.counterTypes.DECREMENT:
            return state - action.payload
    
        default:
        return state
    }
}

export default countReducers