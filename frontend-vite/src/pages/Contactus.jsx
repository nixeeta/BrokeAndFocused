// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="main-container" style={{ padding: "2rem" }}>
      <h1 className="heading">📬 Contact Us</h1>
      <p className="paragraph">
        Have feedback, feature requests, or just want to say hi? We’d love to hear from you.
      </p>

      <ul className="paragraph" style={{ marginTop: "1rem" }}>
        <li>📧 Email: <a href="mailto:team@brokeaf.io">team@brokeaf.io</a></li>
        <li>🌐 GitHub: <a href="https://github.com/your-org/brokeaf" target="_blank" rel="noreferrer">github.com/your-org/brokeaf</a></li>
        <li>📣 Twitter: <a href="https://twitter.com/brokeaf_app" target="_blank" rel="noreferrer">@brokeaf_app</a></li>
      </ul>

      <p className="paragraph" style={{ marginTop: "2rem" }}>
        This is a community-first project. If you’re a student, designer, or dev — jump in!
      </p>
    </div>
  );
};

export default Contact;
