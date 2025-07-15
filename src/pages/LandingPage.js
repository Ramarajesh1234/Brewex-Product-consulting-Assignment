import React, { useEffect, useState } from "react";

function LandingPage() {
  const [heading, setHeading] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/heading")
      .then((res) => res.json())
      .then((data) => setHeading(data.heading));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>{heading}</h1>
      <p>Other static content from the Figma design goes here...</p>
    </div>
  );
}

export default LandingPage;
