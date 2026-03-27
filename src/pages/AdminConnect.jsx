import React from "react";
import ApiConnect from "../ApiConnect.jsx";

export default function AdminPage() {
  const isAdmin = localStorage.getItem("isAdmin");

  if (isAdmin !== "true") {
    return <p>You do not have permission to view this page.</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ApiConnect />
    </div>
  );
}