import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./Home.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import AdminPage from "./pages/AdminConnect.jsx";
import VerifyPage from "./pages/VerifyPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="verify/:tagId" element={<VerifyPage />} />
          <Route
            path="*"
            element={
              <div style={{ padding: "40px", textAlign: "center" }}>
                <h2>404 - Page Not Found</h2>
              </div>
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

