import React, { useState } from "react";
import aboutHero from "./assets/aboutHero.jpg";
import "./index.css";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
      <div className="light-grey-page">
    <div>
      
      <img
        src={aboutHero}
        alt="About"
        className="w-100"
        style={{ height: "70vh", objectFit: "cover" }}
      />

      <div className="container my-5">

        {!showMore && (
          <div className="about-paragraph">
            <h2>About Us</h2>

            <p>
              Cortex Microsystems designs, builds, and deploys technology
              solutions to strengthen trust in complex supply chains. We focus
              on detecting and deterring counterfeiting, tampering, grey market
              diversion, theft, and inventory mismanagement.
            </p>

            <p>
              Our solutions combine NFC, cryptography, and real-time anomaly
              detection to provide secure authentication and visibility across
              supply chains.
            </p>

            <p>
  Based in{" "}
  <span className="location-highlight">
    Braamfontein, Johannesburg, South Africa
  </span>
  , we serve pharmaceuticals, FMCG, automotive, courier, and agricultural
  processing sectors.
</p>
            <div
              className="learn-more-btn"
              onClick={() => setShowMore(true)}
            >
              Learn More
            </div>
          </div>
        )}

        {showMore && (
          <div className="about-paragraph">

            <h3>Who We Are</h3>
            <p>
              Cortex Microsystems is a South Africa–based technology venture
              focused on embedded systems, secure hardware, and authentication
              technologies. We help organizations strengthen trust and integrity
              in complex supply chains.
            </p>

            <h3>What We Do</h3>
            <p>
              Our solutions detect and deter counterfeiting, tampering, grey
              market diversion, theft, and inventory mismanagement. We combine
              NFC, cryptography, and real-time anomaly detection to provide
              secure authentication and visibility across supply chains.
            </p>

            <h3>Who We Serve</h3>

            <ul className="clean-list">
              <li>Pharmaceutical manufacturers and distributors</li>
              <li>FMCG manufacturers and brand owners</li>
              <li>Automotive parts manufacturers</li>
              <li>Logistics and courier operators</li>
              <li>Agricultural processing supply chains</li>
            </ul>

            <div
              className="learn-more-btn"
              onClick={() => setShowMore(false)}
            >
              Back
            </div>

          </div>
        )}

      </div>
    </div>
    </div>
  );
}
