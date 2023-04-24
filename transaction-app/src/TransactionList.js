import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';
import TransactionForm from './TransactionForm';

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Recent Transactions</h1>
      <input type="text" placeholder="Search transactions..." onChange={handleSearchTermChange} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
        </tbody>
      </table>
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
}

export default TransactionsList;
