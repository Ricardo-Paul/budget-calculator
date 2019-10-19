import React, {useState} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import uuid from 'uuid/v4'

const initialExpenses = [
  {id: uuid(), charge: "rent", amount: 1600},
  {id: uuid(), charge: "car payment", amount: 4500},
  {id: uuid(), charge: "credit card bill", amount: 700}
]


function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  

  // const expenses = result[0];
  // const setExpenses = result[1];
  // console.log(expenses, setExpenses);
  
return <> 
    <Alert />
    <h1> Budget Calculator </h1>
    <main className="App">
      <ExpenseForm />
      <ExpenseList expenses={expenses}/>
      {/* As we pass an argument to ExpenseList, so we'll have to access this argument in ExpenseList */}
    </main>

    <h1>
      total spending : <span className="total">
        {/* Reduce takes a callback and an initial value (0) */}
        $
        { expenses.reduce( (accumulator, current) => {
          return (accumulator += current.amount)
        }, 0 ) }
      </span>
    </h1>

  </>;
}

export default App;
