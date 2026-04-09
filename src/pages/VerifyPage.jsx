import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VerifyPage() {
  const { tagId } = useParams();

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
              `https://tazsownqx9.execute-api.af-south-1.amazonaws.com/verify/${tagId}`
      );

        const data = await res.json();
        setResult(data);
      } catch (err) {
        setResult({ status: "ERROR" });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tagId]);

  return (
    <div style={{ textAlign: "center", padding: "60px 20px" }}>
      
      <h2>Product Verification</h2>
      <p>Tag ID: {tagId}</p>

      {loading && <h3>Checking authenticity...</h3>}

      {!loading && result && (
        <div style={{ marginTop: "30px" }}>

          {result.status === "AUTHENTIC" && (
            <h1 style={{ color: "green" }}>✔ AUTHENTIC PRODUCT</h1>
          )}

          {result.status === "SUSPECT" && (
            <h1 style={{ color: "orange" }}>⚠ SUSPECT PRODUCT</h1>
          )}

          {result.status === "FAKE" && (
            <h1 style={{ color: "red" }}>✖ FAKE PRODUCT</h1>
          )}

          {result.status === "ERROR" && (
            <h1 style={{ color: "gray" }}>Error verifying product</h1>
          )}

          {result.message && <p>{result.message}</p>}
        </div>
      )}
    </div>
  );
}
