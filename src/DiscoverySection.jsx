import React, { useState } from "react";
import "./index.css"; 

export default function DiscoverySection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [success, setSuccess] = useState("");

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    if (!formData.name) {
      alert("Please enter your name");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mnjnwyzp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Discovery Form Submission",
        }),
      });

      if (response.ok) {
        setSuccess("Form submitted successfully ✅");
        setFormData({ name: "", email: "", company: "" });
        setTimeout(() => setSuccess(""), 3000);
      } else {
        alert("Failed to submit ❌");
      }
    } catch (error) {
      alert("Server error ❌");
    }
  };

  return (
    <section
      className="discovery-section"
      style={{ padding: "60px 20px", textAlign: "center" }}
    >
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
          className="contact-form"
          style={{ maxWidth: "400px", margin: "20px auto", textAlign: "left" }}
        >
          {success && (
            <div
              className="alert alert-success mb-2"
              style={{ textAlign: "center" }}
            >
              {success}
            </div>
          )}

          <div className="form-row">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control mb-2"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control mb-2"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="company">Company (optional)</label>
            <input
              type="text"
              name="company"
              id="company"
              className="form-control mb-2"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>

          <div className="small mt-2 text-center" style={{ opacity: 0.8 }}>
            Exploratory conversation • NDA available
          </div>

          <p className="small text-center mt-2">
            Prefer email?{" "}
            <a href="mailto:taurai.m@cortexmicrosystems.co.za">
              taurai.m@cortexmicrosystems.co.za
            </a>
          </p>
        </form>
      )}
    </section>
  );
}
