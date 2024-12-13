import React, { useState } from 'react';
import './styles/form.css';

const ExpenseForm = ({ addExpense }) => {
  const [amount, setAmount] = useState('');
  const [label, setLabel] = useState('');
  const [category, setCategory] = useState('Alimentation');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ amount: parseFloat(amount), label, category });
    setAmount('');
    setLabel('');
    setCategory('Alimentation');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
        required
      />
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Label"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Alimentation">Alimentation</option>
        <option value="Logement">Logement</option>
        <option value="Transport">Transport</option>
        <option value="Divertissement">Divertissement</option>
        <option value="Santé">Santé</option>
        <option value="Éducation">Éducation</option>
        <option value="Autres">Autres</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default ExpenseForm;
