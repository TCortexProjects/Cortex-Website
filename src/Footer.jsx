import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container">

        <div className="row">

          <div className="col-md-6 mb-3">
            <strong>Cortex Microsystems</strong>

            <p className="small mt-2">
              South Africa–based technology venture focused on embedded systems,
              secure hardware, and authentication technologies.
            </p>

            <p className="small">
              Engineering-led • Evidence-driven • Early-stage discovery
            </p>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="col-md-6 mb-3">
            <h6>Our Location</h6>

            <iframe
              title="Braamfontein Map"
              src="https://www.google.com/maps?q=41+Juta+Street+Braamfontein+Johannesburg&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

            <p className="small mt-2">
              41 Juta Street, Braamfontein, Johannesburg
            </p>
          </div>

        </div>
        <div className="text-center mt-3 small">
          © {new Date().getFullYear()} Cortex Microsystems
        </div>

      </div>
    </footer>
  );
}



