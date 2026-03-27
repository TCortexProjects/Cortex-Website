import React, { useState } from "react";
import "./index.css";

export default function DiscoverySection() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      
      <h2>Participate in Discovery</h2>

      <p style={{ maxWidth: "650px", margin: "10px auto" }}>
        Participation involves a single confidential conversation focused on
        understanding your current processes and challenges.
      </p>

      {!showForm && (
        <>
          <button
            className="btn btn-primary mt-3"
            onClick={() => setShowForm(true)}
          >
            Schedule a Discovery Conversation
          </button>

          <div className="small mt-2" style={{ opacity: 0.8 }}>
            Exploratory conversation • NDA available
          </div>
        </>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "400px",
            margin: "20px auto",
            textAlign: "left",
          }}
        >
          <input
            className="form-control mb-2"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            className="form-control mb-2"
            placeholder="Your Email"
            required
          />

          <input
            className="form-control mb-2"
            placeholder="Company (optional)"
          />

          <button className="btn btn-success w-100">
            Submit
          </button>

          <div className="small mt-2 text-center" style={{ opacity: 0.8 }}>
            Exploratory conversation • NDA available
          </div>
        </form>
      )}
    </section>
  );
}