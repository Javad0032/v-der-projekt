<<<<<<< HEAD
import { useState, useRef } from "react";

import "./App.css";

=======
import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

>>>>>>> 8251c7cbc7726e8e9d9f6a849604b1d915539b57
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const handleSearch = async () => {
    const value = inputRef.current.value;
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/data/metar?q=${encodeURIComponent(value)}`
      );
      const data = await response.json();
      setWeather(data);
      console.log(weather);
    } catch (error) {
<<<<<<< HEAD
      console.error("Api could not fetch:", error);
    }
  };

=======
      console.error('Api could not fetch:', error);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  handleSearch();
}, []);
>>>>>>> 8251c7cbc7726e8e9d9f6a849604b1d915539b57
  return (
    <>
      <div className="h-screen w-full flex gap-12">
        <div className="w-1/4 flex flex-col items-center justify-center gap-12">
          <div>
            <h1>Väder app</h1>
          </div>

          <div className="flex flex-col gap-4 w-3/4">
            <input
              ref={inputRef}
              type="text"
              className="bg-[#f7f7f7] h-10 p-2 rounded"
<<<<<<< HEAD
              aria-placeholder="zxaza"
              placeholder="Plats"
            />

            <div className="flex items-center gap-2">
              <button className="w-1/2 bg-[#1a1a1a] text-white">Rensa</button>
=======
              placeholder="Plats"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="w-1/2 bg-[#1a1a1a] text-white"
              >
                Rensa
              </button>
>>>>>>> 8251c7cbc7726e8e9d9f6a849604b1d915539b57

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
<<<<<<< HEAD
          {weather && (
            <div>
              <h2>
                {weather.location.name}, {weather.location.country}
              </h2>
              <p>{weather.current.temp_c}°C</p>
            </div>
          )}

          <WeatherCard></WeatherCard>
=======
          <WeatherCard weather={weather} ></WeatherCard>
>>>>>>> 8251c7cbc7726e8e9d9f6a849604b1d915539b57
        </div>
      </div>
    </>
  );
}

export default App;
