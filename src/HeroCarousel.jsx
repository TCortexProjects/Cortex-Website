import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import hero1 from "./assets/hero1.jpg";
import hero2 from "./assets/hero2.jpg";
import hero3 from "./assets/hero3.jpg";

export default function HeroCarousel() {
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState("");

  const slides = [
    { image: hero1 },
    { image: hero2 },
    { image: hero3 },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const company = form.company.value;

    if (!email.includes("@")) {
      alert("Please enter a valid email");
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
          name,
          email,
          company,
          _subject: "New Cortex Microsystems Lead",
        }),
      });

      if (response.ok) {
        setSuccess("Message sent successfully ✅");
        form.reset();
        setTimeout(() => setSuccess(""), 3000);
      } else {
        alert("Failed to send ");
      }
    } catch (error) {
      alert("Server error ");
    }
  };

  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade position-relative"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="false"
    >
      
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.image}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ height: "70vh", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      
      <div
      className="hero-section"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <h2 className="fw-bold">Securing Trust in Complex Supply Chains</h2>
        <p style={{ maxWidth: "650px", marginTop: "15px" }}>
          Cortex Microsystems is conducting industry discovery to understand how
          organisations deal with counterfeiting, diversion, tampering, and
          inventory loss.
        </p>

        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="btn btn-primary mt-3"
          >
            Schedule a Discovery Conversation
          </button>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: "20px",
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            {success && (
              <div
                style={{
                  marginBottom: "10px",
                  color: "lightgreen",
                  fontWeight: "bold",
                }}
              >
                {success}
              </div>
            )}

            <div className="mb-2">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                name="company"
                className="form-control"
                placeholder="Company (optional)"
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>

            <div
              style={{ marginTop: "10px", fontSize: "14px", opacity: 0.85 }}
            >
              30–45 minutes • No sales pitch • Confidential
            </div>

            <p style={{ marginTop: "5px", fontSize: "14px", opacity: 0.85 }}>
              Prefer email?{" "}
              <a
                href="mailto:taurai.m@cortexmicrosystems.co.za"
                style={{ color: "white", textDecoration: "underline" }}
              >
                taurai.m@cortexmicrosystems.co.za
              </a>
            </p>
          </form>
        )}
      </div>

      
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
        style={{ zIndex: 3 }}
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
        style={{ zIndex: 3 }}
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
