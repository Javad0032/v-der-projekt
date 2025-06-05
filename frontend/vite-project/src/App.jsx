import { useState, useRef, useEffect } from "react";

import "./App.css";

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
      console.error("Api could not fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <>
      <div className="h-screen w-full flex gap-12">
        <div className="w-1/4 flex flex-col items-center justify-center gap-12">
          <div>
            <h1>WeatherApp</h1>
          </div>

          <div className="flex flex-col gap-4 w-3/4">
            <input
              ref={inputRef}
              type="text"
              className="bg-[#f7f7f7] h-10 p-2 rounded"
              placeholder="Location"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <div className="flex items-center gap-2">
              {/* "Rensa"-knapp: Rensar väderdata och tömmer inputfältet */}
              <button
                className="w-1/2 bg-[#1a1a1a] text-white"
                onClick={() => {
                  setWeather(null);
                  inputRef.current.value = "";
                }}
              >
                Clear
              </button>

              <button
                onClick={() => handleSearch()}
                className="w-1/2 bg-[#f9f9f9]"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="w-3/4">
          <WeatherCard weather={weather}></WeatherCard>
        </div>
      </div>
    </>
  );
}

export default App;
