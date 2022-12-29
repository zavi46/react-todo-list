import React from 'react'

const TodoItem = ({todo , onDlt}) => {
    return (
        <div>
            <h4>{todo.title} </h4>
            <p> {todo.desc} </p>
            <button className="btn btn-danger btn-sm" onClick={()=>{onDlt(todo)}}>Delete</button>
            <hr />
        </div>
    )
}

export default TodoItem
