import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.get("/api/data/metar", async (req, res) => {
  const station = req.query.q || "Stockholm";

  if (!station) {
    return res.status(400).json({ error: "Plats saknas i query (q)" });
  }

  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=745d65f89f5a427998093630250206&q=${encodeURIComponent(station)}&aqi=no`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching METAR-data:", error.message);
    res.status(500).json({ error: "Kunde inte hämta data" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servern körs på http://localhost:${PORT}`);
});
