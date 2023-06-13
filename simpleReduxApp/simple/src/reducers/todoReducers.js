import { AllActionTypes } from "../actionTypes";

const initialState = [];

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case AllActionTypes.todoType.ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};
