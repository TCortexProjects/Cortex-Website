import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import feature1 from "./assets/feature1.jpg";
import feature2 from "./assets/feature2.jpg";
import feature3 from "./assets/feature3.jpg";

export default function FeatureSections() {
  const features = [
    {
      image: feature1,
      title: "Visibility Gap",
      list: [
        "Modern supply chains span multiple organisations",
        "Multiple systems and handovers increase complexity",
        "Harder to verify product authenticity",
        "Difficult to detect tampering",
        "Maintaining trusted inventory data is challenging",
      ],
    },
    {
      image: feature2,
      title: "Problem Complexity",
      list: [
        "Visual identifiers are easy to copy",
        "Audits are periodic and not continuous",
        "Heavy reliance on human input",
        "Multiple weak points across the supply chain",
      ],
    },
    {
      image: feature3,
      title: "Target Audience",
      list: [
        "FMCG manufacturers and brand owners",
        "Pharmaceutical manufacturers and distributors",
        "Automotive parts manufacturers",
        "Logistics and courier operators",
        "Supply chain leaders",
      ],
    },
  ];

 
    return (
    <div className="container my-5">
      <div className="row">
        {features.map((f, i) => (
          <div className="col-md-4 mb-4 d-flex" key={i}>
            
            <div className="feature-card shadow rounded overflow-hidden h-100 d-flex flex-column">
              
              <img
                src={f.image}
                alt={f.title}
                className="img-fluid w-100"
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div className="p-4 bg-white d-flex flex-column flex-grow-1">
                <h3 className="mb-3">{f.title}</h3>

                <ul className="mb-0 flex-grow-1">
                  {f.list.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}