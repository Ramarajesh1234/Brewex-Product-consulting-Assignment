// server/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let headingSentence =
  "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/heading", (req, res) => {
  res.json({ heading: headingSentence });
});

app.post("/api/heading", (req, res) => {
  const { heading } = req.body;
  if (heading) {
    headingSentence = heading;
    return res.status(200).json({ message: "Heading updated successfully" });
  }
  res.status(400).json({ error: "Heading not provided" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
