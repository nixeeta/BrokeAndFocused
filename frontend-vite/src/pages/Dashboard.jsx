import React, { useEffect, useState } from 'react';
import API from '../utils/axios';
import GoalTracker from '../components/GoalTracker';
import CategoryChart from '../components/CategoryChart';
import SpendTrendChart from '../components/SpendTrendChart';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState('');
  const [form, setForm] = useState({
    type: 'expense',
    amount: '',
    category: '',
    note: ''
  });

  const fetchTransactions = async () => {
    const res = await API.get('/transactions');
    setTransactions(res.data);
  };

  const fetchSummary = async () => {
    const res = await API.get('/ai/summary');
    setSummary(res.data.summary);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/transactions', form);
    setForm({ ...form, amount: '', category: '', note: '' });
    fetchTransactions();
  };

  useEffect(() => {
    fetchTransactions();
    fetchSummary();
  }, []);

  return (
    <div className="main-container">
      <h1 className="heading">👋 Welcome Back</h1>

      <form onSubmit={handleSubmit}>
        <h3 className="subheading">Log a Transaction</h3>
        <select className="input" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input className="input" placeholder="Amount" type="number" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} />
        <input className="input" placeholder="Category (e.g. food, rent)" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
        <input className="input" placeholder="Note" value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} />
        <button className="button" type="submit">Add</button>
      </form>

      <GoalTracker />
      <CategoryChart />
      <SpendTrendChart />

      <div className="card">
        <h3 className="subheading">💼 Recent Transactions</h3>
        {transactions.slice(0, 5).map((tx, i) => (
          <div key={i} className="paragraph">
            <strong>{tx.type.toUpperCase()}</strong> ₹{tx.amount} - {tx.category} <span style={{ color: 'gray' }}>({tx.note})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
