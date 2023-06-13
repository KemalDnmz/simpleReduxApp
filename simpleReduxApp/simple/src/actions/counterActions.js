import { AllActionTypes } from "../actionTypes";

 const increase = (val) => {
  return {
    type: AllActionTypes.counterTypes.INCREMENT,
    payload: val,
  };
};

const decrease = (val) => {
    return {
      type: AllActionTypes.counterTypes.DECREMENT,
      payload: val,
    };
  };

  const counts = {
    increase,
    decrease
  }

  export default counts
  


