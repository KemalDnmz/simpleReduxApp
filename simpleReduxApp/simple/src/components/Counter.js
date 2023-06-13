import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import allActions from '../actions'

const Counter = () => {
    const dispatch=useDispatch()
    const count =useSelector(state => state.countReducers)
  return (
    <div className='counterDiv'>

        <button className='increaseBtn' onClick={() => dispatch(allActions.counts.increase(1))}>INCREASE</button>
        <button className='decreaseBtn' onClick={() => dispatch(allActions.counts.decrease(1))}>DECREASE</button>
        <div>{count}</div>
    </div>
  )
}

export default Counter