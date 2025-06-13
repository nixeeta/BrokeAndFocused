// src/pages/Summary.js

import React from 'react';
import '../styles/global.css';

const Summary = () => {
  return (
    <div className="main-container">
      <h1 className="heading">📊 Your Financial Graph</h1>
      <p className="paragraph">Here’s how you’ve been spending recently:</p>

      <div className="chart-placeholder" style={{
        background: '#fff',
        border: '1px solid #ddd',
        padding: '1rem',
        borderRadius: '1rem',
        marginBottom: '2rem'
      }}>
        <h2 className="subheading">📅 Monthly Summary (Recharts/Chart.js)</h2>
        <p className="paragraph">[Graph goes here]</p>
      </div>

      <div className="chart-placeholder" style={{
        background: '#fff',
        border: '1px solid #ddd',
        padding: '1rem',
        borderRadius: '1rem',
        marginBottom: '2rem'
      }}>
        <h2 className="subheading">💰 Category-wise Breakdown</h2>
        <p className="paragraph">[Pie Chart or Bar Chart]</p>
      </div>

      <div className="main-container">
        <h1 className="heading">📊 Your Weekly Summary!</h1>
        <p className="paragraph">Here’s how you may improve on spending habits:</p>

        <div className="ai-summary" style={{
          background: '#f1f1f1',
          padding: '1rem',
          borderRadius: '1rem'
        }}>
          <h2 className="subheading">🧠 AI Weekly Summary</h2>
          <p className="paragraph">"You're spending a lot on food delivery again... maybe switch to groceries?"</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
