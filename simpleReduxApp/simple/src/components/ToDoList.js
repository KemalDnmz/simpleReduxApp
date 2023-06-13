import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import allActions from '../actions'

const todo = {
    name:"Have a nice day"
}

export const ToDoList = () => {
    const todos = useSelector(value => value.todoReducers)
    const dispatch = useDispatch()

  return (
    <div className='todoDiv'>
        <button className='todoBtn' onClick={() => dispatch(allActions.todoActions(todo))}>ADD TODO</button>
        <ul> {todos.map( (todo,index) => <li key={index}>{todo.name}</li>  )} </ul>
    </div>
  )
}
