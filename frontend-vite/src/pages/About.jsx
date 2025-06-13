// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="main-container" style={{ padding: "2rem" }}>
      <h1 className="heading">💡 About BrokeAndFocused</h1>
      <p className="paragraph">
        <strong>BrokeAndFocused (BrokeAF)</strong> is a student-focused, open-source personal finance app 
        that helps you manage money without micromanaging every rupee. Built with real student problems in mind —
        from last-minute Maggi runs to rent stress — we combine smart AI with simple design to give you clarity over your cash.
      </p>

      <h2 className="heading" style={{ marginTop: "2rem" }}>🎯 Our Mission</h2>
      <p className="paragraph">
        Most budgeting tools are bloated, boring, or bank-driven. We’re different:
      </p>
      <ul className="paragraph">
        <li>🧠 AI that learns your spending habits</li>
        <li>📊 Graphs that show exactly where your money goes</li>
        <li>🔐 Privacy-first — no trackers, no ads, no spam</li>
        <li>🚀 Works offline for metro commuters or hostel life</li>
      </ul>

      <p className="paragraph" style={{ marginTop: "2rem" }}>
        Whether you're hustling through college, freelancing, or living on allowance — BrokeAF is built to make you smarter with money, not stressed by it.
      </p>
    </div>
  );
};

export default About;
