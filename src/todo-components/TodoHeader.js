import React from 'react'
import Todo from './Todo'

const TodoHeader = ({userName, todoItems}) => {
    return (
        <div className="header">
            <h2> {userName}'s Tasks List </h2>
            <h4> {todoItems.filter( item => !item.done).length } tasks to do</h4>
        </div>
    )
}

export default TodoHeader