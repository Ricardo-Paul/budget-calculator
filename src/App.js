import React, {useState, useEffect} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import uuid from 'uuid/v4'
import {Link} from 'react-router-dom'

const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];


function App() {
const [expenses, setExpenses] = useState(initialExpenses);
const [charge, setCharge] = useState('')
const [amount, setAmount] = useState('')
const [alert, setAlert] = useState({show: false})
const [edit, setEdit] = useState(false)
const [id, setId] = useState(0)

// ******** Use Effect **********
useEffect( ()=>{
  localStorage.setItem('expenses', JSON.stringify(expenses))
}, [expenses] )

  const handleCharge = e => { 
    setCharge(e.target.value);
  }

  const handleAmount = e => {
    setAmount(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0){
      if (edit){
          let tempExpenses = expenses.map( item => {
            return item.id === id ? {...item, charge, amount} : item
          } )
      setExpenses(tempExpenses)
      setEdit(false)
      handleAlert({ type: "success", text: "Item successfully edited" })
      }else{
          const newExpense = {id:uuid(), charge, amount}
          setExpenses([...expenses, newExpense])
          handleAlert({ type:"success", text:"Expense added" })
      }

      setCharge("")
      setAmount("")
    } else{
      handleAlert({ type:"danger", text:`change can't be empty value and value has to be bigger than 0` })
    }
  }


  const handleAlert = ({type, text}) => {
    setAlert({show:true, type, text});

    setTimeout( ()=>{ 
      setAlert({show:false})
     },3000 )
  }

const clearItems = () =>{
  setExpenses([])
};

const handleDelete = (id) => {
 const expensesLeft = expenses.filter( item => item.id !== id );
 setExpenses(expensesLeft)
}

const handleEdit = (id) => {
  const expense = expenses.find( (item) => item.id === id );
  const { charge, amount } = expense;
  setEdit(true)
  setCharge(charge);
  setAmount(amount);
  setId(id)
}

return <> 
    {alert.show && <Alert type={alert.type} text={alert.text} />}
    <Alert />
    <h1 className="title" > PERSONAL FINANCE </h1>
    <main className="App">
      <ExpenseForm
      charge={charge}
      amount={amount}
      handleAmount={handleAmount}
      handleCharge={handleCharge}
      handleSubmit={handleSubmit}
      edit={edit}
      />
      <ExpenseList
      expenses={expenses}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      clearItems={clearItems}
      />
    </main>

    <h1>
      total spending : <span className="total">
        $
        { expenses.reduce( (accumulator, current) => {
          return (accumulator += parseInt(current.amount) )
        }, 0 ) }
      </span>
    </h1>
        <div className="designer" >
             <h5>DESIGNED BY @RICARDO PAUL</h5>
         </div>
  </>;
}

export default App;
