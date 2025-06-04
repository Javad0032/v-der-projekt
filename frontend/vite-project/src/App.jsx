import { useState, useRef } from "react";

import "./App.css";

import WeatherCard from "./Components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const inputRef = useRef();

  const handleSearch = async () => {
    const value = inputRef.current.value;

    try {
      const response = await fetch(
        `http://localhost:5000/api/data/metar?q=${encodeURIComponent(value)}`
      );
      const data = await response.json();
      setWeather(data);
      console.log(weather);
    } catch (error) {
      console.error("Api could not fetch:", error);
    }
  };

  return (
    <>
      <div className="h-screen flex gap-12 p-8">
        <div className="w-1/4 flex flex-col items-center justify-center gap-12">
          <div>
            <h1>Väder app</h1>
          </div>

          <div className="flex flex-col gap-4 w-3/4">
            <input
              ref={inputRef}
              type="text"
              className="bg-[#f7f7f7] h-10 p-2 rounded"
              aria-placeholder="zxaza"
              placeholder="Plats"
            />

            <div className="flex items-center gap-2">
              <button className="w-1/2 bg-[#1a1a1a] text-white">Rensa</button>

              <button
                onClick={() => handleSearch()}
                className="w-1/2 bg-[#f9f9f9]"
              >
                Sök
              </button>
            </div>
          </div>
        </div>

        <div className="w-3/4">
          {weather && (
            <div>
              <h2>
                {weather.location.name}, {weather.location.country}
              </h2>
              <p>{weather.current.temp_c}°C</p>
            </div>
          )}

          <WeatherCard></WeatherCard>
        </div>
      </div>
    </>
  );
}

export default App;
