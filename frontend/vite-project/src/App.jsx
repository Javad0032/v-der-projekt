import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


import WeatherCard from "./Components/WeatherCard";

function App() {
  const [inputValue, setInputValue] = useState("");
  

  const handleSearch = () => {
    //coonsole.log();
  }


  return (
    <>
      <div className="h-screen flex gap-12 p-8">
        <div className="w-1/4 flex flex-col items-center justify-center gap-12">

          <div>
            <h1>Väder app</h1>
          </div>

          <div className="flex flex-col gap-4 w-3/4">
            <input type="text" className="bg-[#f7f7f7] h-10 p-2 rounded" aria-placeholder="zxaza" placeholder="Plats" />

            <div className="flex items-center gap-2">
              <button onClick={() => setCount((count) => count + 1)} className="w-1/2 bg-[#1a1a1a] text-white" >
                Rensa
              </button>

              <button onClick={() => handleSearch() } className="w-1/2 bg-[#f9f9f9]">
                Sök
              </button>
            </div>
          </div>

        </div>


        <div className="w-3/4">
          <WeatherCard></WeatherCard>
        </div>

      </div>

    </>
  );
}

export default App;
