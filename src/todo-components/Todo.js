import React, {useState, useEffect} from 'react'
import TodoHeader from './TodoHeader'
import TodoForm from './TodoForm'
import TodoRows from './TodoRows'
import './todoStyles.css';
import { render } from 'react-dom';

export default function Todo() {
    const [test, setTest] = useState('')

    const [userName, setUserName] = useState('Ricardo')
    const [newItemText, setNewItemText] = useState('')
    const [showDone, setShowDone] = useState(false)

    const [todoItems, setTodoItems] = useState([
        { action: 'Finish Social App software', done: false },
        { action: 'Style Squiz app', done: false },
        { action: 'Review CSS styling', done: true}
    ])

    const createNewTodo = (e) => {
        e.preventDefault()
        if(!todoItems.find( todo => todo.action === newItemText )){
            setTodoItems([...todoItems, { action: newItemText, done: false } ]);
            setNewItemText('')
            setTest('added')
            return
        }

        setTest('existed')
    }

    const updateItemText = (e) => {
        setNewItemText(e.target.value)
    }

    const toggleTodo = (item) => {
        setTodoItems(todoItems.map( todo => todo.action === item.action ? { ...todo, done: !todo.done } : todo )
        )
    }

    const todoTableRows = () => {
       return todoItems.map( item =>  <TodoRows item={item} toggleTodo={() => toggleTodo(item)} /> )
    }

    const showDoneTasks = () => {
    return todoItems.filter( item => item.done === true ).map( item => <p> {item.action} </p>  )
    }

    const toggleShowDone = () => {
        setShowDone( showDone === false ? true : false )
    }

    return (
        <div className="todoBody">
            <div className="todoApp">
                <TodoHeader userName={userName} todoItems={todoItems} />
                <TodoForm newItemText={newItemText} updateItemText={updateItemText} createNewTodo={createNewTodo} />
                <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th> Status </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td> Walk dog</td>
                    <td> done </td>
                    </tr>
                    {todoTableRows()}
                </tbody>
                </table>

                <br />
                <label> completed task </label>
                <input type="checkbox" checked={showDone} onChange={toggleShowDone} />
                {showDone && <table>
                <thead>
                    <tr>
                        <th> Description </th>
                        <th> Done tasks </th>
                    </tr>
                </thead>
                <tbody>
                    {showDoneTasks()}
                </tbody>
                </table>  }
                {test}
            </div>
        </div>
    )
}
