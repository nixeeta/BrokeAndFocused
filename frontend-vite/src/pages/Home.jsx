import React from 'react';  
import '../styles/global.css';

const Home = () => {
  return (
    <div className="main-container">
      <h1 className="heading">💸 BrokeAndFocused</h1>
      <h2 className="subheading">Built for the broke. Designed for the focused.</h2>
      <p className="paragraph">
        BrokeAF is your AI-powered finance coach that helps you manage money, track expenses,
        and save smarter – all while keeping your data private and offline-friendly.
      </p>
      <button className="button">Get Started</button>
    </div>
  );
};

export default Home;
