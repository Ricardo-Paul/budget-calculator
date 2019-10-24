import React, {useState, useEffect} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import uuid from 'uuid/v4'
// import { stringify } from 'querystring';

// const initialExpenses = [
//   {id: uuid(), charge: "rent", amount: 1600},
//   {id: uuid(), charge: "car payment", amount: 4500},
//   {id: uuid(), charge: "credit card bill", amount: 700}
// ]

const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];


function App() {
  // const result = useState(initialExpenses)
  // console.log(result[0], result[1]);
  
  // ***************** state values ***********************
  // An array of expenses : id, charge, amount *** a function to modify the value of expenses: charge, amount
  const [expenses, setExpenses] = useState(initialExpenses);
  // set the state// initial value for a charge only.. an empty string
  const [charge, setCharge] = useState('')
  // set initial value for amount ** but we are getting it as string here-- amount is a string
  const [amount, setAmount] = useState('')
// alert is an object
  const [alert, setAlert] = useState({show: false})
// edit (manipulate form button)
const [edit, setEdit] = useState(false)
// edit item *** When editing an item, the id should remain the same
// So we're creating this state to reset the id
const [id, setId] = useState(0)

// ******** Use Effect **********
useEffect( ()=>{
  localStorage.setItem('expenses', JSON.stringify(expenses))
}, [expenses] )


  const handleCharge = e => { 
    // console.log(`charge: ${e.target.value}`)
    setCharge(e.target.value);
  }

  const handleAmount = e => {
    // console.log(`amount: ${e.target.value}`)
    setAmount(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    // now we can access the states we just set
    // console.log(charge, amount)
    if (charge !== "" && amount > 0){
      if (edit){
        // We access all the expenses in a temporary varible,
        // we return the whole expenses with ...spread operator with just one change
          let tempExpenses = expenses.map( item => {
            return item.id === id ? {...item, charge, amount} : item
          } )
      setExpenses(tempExpenses)
      setEdit(false)
      handleAlert({ type: "success", text: "Item successfully edited" })
      }else{
          //  Once submit we have to modify our intialExpenses to add the new object
          // charge:charge, amount:amount
          const newExpense = {id:uuid(), charge, amount}
          setExpenses([...expenses, newExpense])
          handleAlert({ type:"success", text:"Expense added" })
      }

      setCharge("")
      setAmount("")
    } else{
      // handle alert call
      handleAlert({ type:"danger", text:`change can't be empty value and value has to be bigger than 0` })
    }
  }

  // handle alert
  const handleAlert = ({type, text}) => {
    // we add new properties that weren't here on initialization
    setAlert({show:true, type, text});

    setTimeout( ()=>{ 
      setAlert({show:false})
     },3000 )
  }

  // clear all items
const clearItems = () =>{
  // console.log("Cleared all items");
  setExpenses([])
};

// delete one item
const handleDelete = (id) => {
  // console.log(`Item deleted ${id}`)
 const expensesLeft = expenses.filter( item => item.id !== id );
 setExpenses(expensesLeft)
}

// edit one item
const handleEdit = (id) => {
  // console.log(`Item edited ${id}`)
  const expense = expenses.find( (item) => item.id === id );
  const { charge, amount } = expense;
  setEdit(true)
  setCharge(charge);
  setAmount(amount);
  // keep the same id
  setId(id)
}

return <> 
    {alert.show && <Alert type={alert.type} text={alert.text} />}
    <Alert />
    <h1> Budget Calculator </h1>
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
      {/* As we pass an argument to ExpenseList, so we'll have to access this argument in ExpenseList */}
    </main>

    <h1>
      total spending : <span className="total">
        {/* Reduce takes a callback and an initial value (0) */}
        $
        { expenses.reduce( (accumulator, current) => {
          // remember we were gettting the amount as string
          return (accumulator += parseInt(current.amount) )
        }, 0 ) }
      </span>
    </h1>

  </>;
}

export default App;
