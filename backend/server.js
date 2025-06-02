import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
//      "https://aviationweather.gov/api/data/metar",

app.get("/api/data/metar", async (req, res) => {
  //console.log(`Hämtar METAR-data för station: ${station}`);
  try {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=745d65f89f5a427998093630250206&q=London&aqi=no",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching METAR-data:", error);
    res.status(500).json({ error: "Could not fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servern körs på http://localhost:${PORT}`);
});
