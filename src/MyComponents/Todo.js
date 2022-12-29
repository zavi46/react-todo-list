import React from 'react'
import TodoItem from "./TodoItem";

const Todo = (props) => {
    return (
        <div className="container my-4">
            <h3>Todos List</h3>
            {props.todos.length === 0 ? <span>No Todo to display</span>:
            props.todos.map((tdo)=>{
               return <TodoItem todo = {tdo} key = {tdo.sno} onDlt = {props.Deleted}/>
                   
            })}
        </div>
    )
}

export default Todo
