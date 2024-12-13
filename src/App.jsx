import React, { useReducer } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList.jsx';
import ExpenseTotal from './components/ExpenseTotal.jsx';
import './App.css';

const initialState = {
  expenses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  const deleteExpense = (index) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: index });
  };

  return (
    <div className="App">
      <h1>Gestionnaire de Dépenses</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={state.expenses} onDelete={deleteExpense} />
      <div className="total">
        <ExpenseTotal expenses={state.expenses} />
      </div>
    </div>
  );
};

export default App;
