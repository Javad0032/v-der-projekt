import express from "express";

const app = express();

app.get("/api/data/metar", (req, res) => {
  try {
    res.send("working... data sent");
    //hello
  } catch {}
});

app.listen(8000, () => {
  console.log(" server running on the http://localhost:8000/");
});
