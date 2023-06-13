import { AllActionTypes } from "../actionTypes";

export const todoActions = (val) =>{
    return {
    type:AllActionTypes.todoType.ADD_TODO,
    payload:val }
}

