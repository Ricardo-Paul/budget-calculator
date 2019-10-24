import React from 'react'
import Item from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
import { MdAlarmAdd } from 'react-icons/md'

//Having access to the expenses variable
// We can pass a prop argument OR just destructure it using the variable name {expenses}
const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
    return (
        <>
            <ul className="list">
                {/*  Each Item / li element is created with an id that allows us to manipulate the list */}
                {expenses.map((expense) => {
                    return <Item key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />;
                })}
            </ul>
            {expenses.length > 0 && <button className="btn" onClick={clearItems} >
                Clear Expenses
                 <MdDelete className="btn-icon" />
            </button>}
        </>
    )
}

export default ExpenseList
