import React from 'react';
import './styles/total.css';

const ExpenseTotal = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div>
      <h2 className="total">Total des Dépenses</h2>
      <p>Total: {total} €</p>
      <h3>Détails par Catégorie</h3>
      <ul>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <li key={category}>
            {category}: {amount} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTotal;
