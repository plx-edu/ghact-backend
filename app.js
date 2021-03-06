const express = require("express");
const cors = require('cors');

const app = express();
const port = 3005;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ msg: "Hello" });
});

app.get("/api/hello", (req, res) => {
  res.json({ msg: "Greetings & Salutations", status: 200 });
});

app.get("/api/dashboard", (req, res) => {
  res.json({ msg: "Dashing when I'm bored", status: 201 });
});

app.listen(port, () => {
  console.log(`::: Listening on port ${port} :::\n`);
});