import React from 'react'

const TodoRows = ({item, toggleTodo}) => {
    console.log("hello rows")
    return (
        <div>
            <tr key={item.action}>
           <td> {item.action} </td>
           <td> <input type="checkbox" checked={item.done} onChange={() => toggleTodo(item)} /> </td>
       </tr>
        </div>
    )
}

export default TodoRows