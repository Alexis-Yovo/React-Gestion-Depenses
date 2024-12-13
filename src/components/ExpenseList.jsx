import React from 'react';
import './styles/list.css';

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div>
      <h2>Liste des Dépenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.label} - {expense.amount} € - {expense.category}
            <button className="delete" onClick={() => onDelete(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
