import React from 'react'

function WeatherCard(props) {
    return (
        <>
            {props.weather && (
                <div className="grid grid-cols-6 grid-rows-3 gap-4 h-screen p-4">

                    {/* Top Row */}
                    <div className="bg-[#f7f7f7] rounded-2xl p-4 col-span-2 flex flex-col items-center justify-center">
                        <h2 className="text-lg font-semibold text-center">
                            {props.weather.current.condition.text}
                        </h2>

                        {props.weather.current.condition.text === "Sunny" && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                        )}
                    </div>

                    <div className="bg-[#f7f7f7] rounded-2xl p-4 col-span-2 flex flex-col items-center justify-center">
                        <h2 className="text-lg font-semibold">Feels like</h2>

                        <h1 className="text-6xl font-bold">{props.weather.current.feelslike_c}</h1>

                    </div>

                    <div className="bg-[#f7f7f7] rounded-2xl p-4 col-span-2 flex flex-col items-center justify-center">
                        <h2 className="text-lg font-semibold">Humidity</h2>
                        <h1 className='text-2xl font-bold'>{props.weather.current.humidity}</h1>
                    </div>

                    {/* Middle Left - 2 stacked boxes */}
                    <div className="flex flex-col gap-4 col-span-1 row-span-2">
                        <div className="bg-[#f7f7f7] rounded-2xl p-4 h-full flex items-center justify-center">
                            {props.weather.location.is_day}
                            {props.weather.location.is_day && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>)}

                            {!props.weather.location.is_day && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                            )}

                        </div>
                        <div className="bg-[#f7f7f7] rounded-2xl p-4 h-full flex flex-col items-center justify-center">
                            <div>
                                <span>Lng</span>
                                <h2 className="text-lg font-semibold">
                                    {props.weather.location.lon}
                                </h2>
                            </div>

                            <div>
                                <span>Lat</span>
                                <h2 className="text-lg font-semibold">
                                    {props.weather.location.lat}
                                </h2>
                            </div>

                        </div>
                    </div>

                    {/* Main Wide Card */}
                    <div className="bg-[#f7f7f7] rounded-2xl p-6 col-span-4 row-span-2">
                        <div className="h-full flex flex-col justify-center items-center text-center">
                            <h4 className="text-[#8a8a8a]">
                                {props.weather.location.name}, {props.weather.location.country}
                            </h4>
                            <h4 className="text-[#8a8a8a]">
                                {props.weather.location.localtime}
                            </h4>

                            <div className="flex items-center justify-center gap-4 mt-4">
                                <h1 className="display font-bold text-black">
                                    {props.weather.current.temp_c}°C
                                </h1>
                            </div>
                        </div>

                    </div>

                    {/* Middle Right - 2 stacked boxes */}
                    <div className="flex flex-col gap-4 col-span-1 row-span-2">
                        <div className="bg-[#f7f7f7] rounded-2xl p-4 h-full">
                            <h2 className="text-lg font-semibold">Uv Index</h2>

                            {props.weather.current.uv}

                        </div>
                    </div>

                    <div className="bg-[#f7f7f7] rounded-2xl p-4 col-span-6 row-span-1 flex items-center justify-between">
                        <div>
                            <span>Wind in kph:</span>
                            <h2 className="text-lg font-semibold">
                                {props.weather.current.wind_kph}
                            </h2>
                        </div>

                        <div>
                            <span>Wind chill:</span>
                            <h2 className="text-lg font-semibold">
                                {props.weather.current.windchill_c}
                            </h2>
                        </div>

                        <div>
                            <span>Pressure:</span>
                            <h2 className="text-lg font-semibold">
                                {props.weather.current.pressure_mb}
                            </h2>
                        </div>
                    </div>
                </div >
            )
            }
        </>
    );
}

export default WeatherCard;
