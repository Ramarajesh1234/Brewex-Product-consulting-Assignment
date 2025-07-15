import React, { useState, useEffect } from "react";

function CMSPage() {
  const [heading, setHeading] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/heading")
      .then((res) => res.json())
      .then((data) => setHeading(data.heading));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/heading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ heading }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message || "Updated!"));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>CMS: Update Main Heading</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          rows={4}
          style={{ width: "100%" }}
        />
        <br />
        <button type="submit">Update Heading</button>
      </form>
    </div>
  );
}

export default CMSPage;
