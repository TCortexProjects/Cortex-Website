import React, { useState } from "react";
import "./index.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    role: "",
    industry: "",
    email: "",
    message: "",
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
    if (!formData.role || !formData.industry) {
      alert("Please select role and industry");
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
          _subject: "New Cortex Microsystems Lead",
        }),
      });

      if (response.ok) {
        setSuccess("Message sent successfully ✅");
        setFormData({
          role: "",
          industry: "",
          email: "",
          message: "",
        });
        setTimeout(() => setSuccess(""), 3000);
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Server error ");
    }
  };

  return (
    <div className="contact-page">
    <section className="form-section">
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit} className="contact-form">

        <div className="form-row">
          <label htmlFor="role">Your Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Operations</option>
            <option>Supply Chain</option>
            <option>Quality / Compliance</option>
            <option>IT / Security</option>
            <option>Executive</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="industry">Industry</label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>FMCG</option>
            <option>Pharmaceuticals</option>
            <option>Agriculture</option>
            <option>Automotive</option>
            <option>Logistics / Courier</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="email">Work Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="message">
            What problem are you facing? (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="cta-button">
          Request a 15-min Chat
        </button>

        <div className="microcopy">
          Exploratory conversation • NDA available
        </div>

        <p className="microcopy">
          Prefer email?{" "}
          <a href="mailto:taurai.m@cortexmicrosystems.co.za">
            taurai.m@cortexmicrosystems.co.za
          </a>
        </p>
        

      </form>
    </section>
    </div>
  );
}



