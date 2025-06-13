import React, { useEffect, useState } from 'react';
import API from '../utils/axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const SpendTrendChart = () => {
  const [trendData, setTrendData] = useState([]);

  const fetchTrend = async () => {
    const res = await API.get('/transactions/spend-trend');
    const formatted = res.data.map(item => ({
      date: item._id,
      amount: item.total
    }));
    setTrendData(formatted);
  };

  useEffect(() => {
    fetchTrend();
  }, []);

  return (
    <div className="card">
      <h3 className="subheading">📈 Daily Spend Trend</h3>
      {trendData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#c1121f" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="paragraph">Not enough data to visualize trends.</p>
      )}
    </div>
  );
};

export default SpendTrendChart;
