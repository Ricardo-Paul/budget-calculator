import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'
// {expense:{id,charge,amount}}
 
// App.js is the container that will set the values for {expense}
const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
    // destructuring expense in single variable
    const { id, charge, amount } = expense;

    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">{amount}</span>
            </div>

            <div>
                <button className="edit-button" aria-label="edit-button" onClick={() => handleEdit(id)}>
                    <MdEdit />
                </button>
                <button className="edit-button" aria-label="edit-button" onClick={ () => handleDelete(id) }>
                    <MdDelete />
                </button>
            </div>

        </li>
    )
}

export default ExpenseItem
