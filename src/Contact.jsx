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

    if (!formData.email) {
      alert("Please enter email");
      return;
    }

    try {
      const response = await fetch("YOUR_AWS_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
        alert("Failed to send ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

  return (
    <div className="container my-5">
      {success && (
        <div className="alert alert-success">
          {success}
        </div>
      )}

      <div className="form-box">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Your Role"
            className="form-control mb-2"
          />

          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            placeholder="Industry"
            className="form-control mb-2"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Work Email"
            className="form-control mb-2"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What problem are you facing?"
            className="form-control mb-2"
          />

          <button type="submit" className="btn btn-success">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
