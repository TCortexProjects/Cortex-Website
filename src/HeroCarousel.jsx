import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import hero1 from "./assets/hero1.jpg";
import hero2 from "./assets/hero2.jpg";
import hero3 from "./assets/hero3.jpg";

export default function HeroCarousel() {
  const [showForm, setShowForm] = useState(false);

  const slides = [
    { image: hero1 },
    { image: hero2 },
    { image: hero3 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
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

        <h2 className="fw-bold">
          Securing Trust in Complex Supply Chains
        </h2>

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
            }}
          >
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Company (optional)"
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </form>
        )}

        
        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.85 }}>
          30–45 minutes • No sales pitch • Confidential
        </div>
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
