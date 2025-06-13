import React, { useEffect, useState } from 'react';
import API from '../utils/axios';

const GoalTracker = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ title: '', targetAmount: '', currentAmount: '' });

  const fetchGoals = async () => {
    const res = await API.get('/goals');
    setGoals(res.data);
  };

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    await API.post('/goals', newGoal);
    setNewGoal({ title: '', targetAmount: '', currentAmount: '' });
    fetchGoals();
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div className="card">
      <h3 className="subheading">🎯 Savings Goals</h3>
      <form onSubmit={handleAddOrUpdate}>
        <input className="input" placeholder="Title" value={newGoal.title} onChange={e => setNewGoal({ ...newGoal, title: e.target.value })} />
        <input className="input" type="number" placeholder="Target Amount" value={newGoal.targetAmount} onChange={e => setNewGoal({ ...newGoal, targetAmount: e.target.value })} />
        <input className="input" type="number" placeholder="Current Saved" value={newGoal.currentAmount} onChange={e => setNewGoal({ ...newGoal, currentAmount: e.target.value })} />
        <button className="button" type="submit">Save Goal</button>
      </form>

      {goals.map((goal, i) => {
        const percent = Math.min(100, (goal.currentAmount / goal.targetAmount) * 100).toFixed(0);
        return (
          <div key={i} className="paragraph" style={{ marginTop: '1rem' }}>
            <strong>{goal.title}</strong>: ₹{goal.currentAmount} / ₹{goal.targetAmount}
            <div style={{ background: '#ddd', borderRadius: '10px', overflow: 'hidden', height: '10px', marginTop: '4px' }}>
              <div style={{ width: `${percent}%`, background: '#c1121f', height: '100%' }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GoalTracker;
