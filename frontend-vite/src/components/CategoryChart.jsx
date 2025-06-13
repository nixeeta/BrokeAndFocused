import React, { useEffect, useState } from 'react';
import API from '../utils/axios';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#f94144', '#f3722c', '#f8961e', '#90be6d', '#43aa8b', '#577590', '#277da1'];

const CategoryChart = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await API.get('/transactions/category-summary');
    const formatted = res.data.map((item, i) => ({
      name: item._id,
      value: item.total
    }));
    setData(formatted);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <h3 className="subheading">📊 Expense Breakdown by Category</h3>
      {data.length > 0 ? (
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <p className="paragraph">No data to show.</p>
      )}
    </div>
  );
};

export default CategoryChart;
