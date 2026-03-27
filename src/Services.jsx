import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <div className="services-box">
        <h2>Our Services</h2>

        <ul className="services-list">
          <li>Anti-counterfeit & Tamper Detection</li>
          <li>Anomaly Detection in Supply Chains</li>
          <li>Secure Authentication & Verification</li>
          <li>Inventory Visibility & Grey Market Prevention</li>
        </ul>

        <div
          className="get-touch-box"
          onClick={() => navigate("/contact")}
        >
          Get in Touch
        </div>
      </div>
    </div>
  );
}

