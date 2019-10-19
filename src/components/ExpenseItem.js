import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'
// {expense:{id,charge,amount}}
 
const ExpenseItem = ({expense}) => {
    // destructuring expense in single variable
    const { id, charge, amount } = expense;
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">{amount}</span>
            </div>

            <div>
                <button className="edit-button" aria-label="edit-button">
                    <MdEdit />
                </button>
                <button className="edit-button" aria-label="edit-button">
                    <MdDelete />
                </button>
            </div>

        </li>
    )
}

export default ExpenseItem
