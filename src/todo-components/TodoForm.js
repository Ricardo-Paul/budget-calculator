import React from 'react'

const TodoForm = ({newItemText, updateItemText, createNewTodo}) => {
    return (
        <div>
            <form>
              <input type="text" value={newItemText} onChange={updateItemText} />
              <button onClick={createNewTodo}> Add Todo </button>
            </form>
        </div>
    )
}

export default TodoForm