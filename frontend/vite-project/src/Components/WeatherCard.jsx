import React from 'react'

function WeatherCard() {
    return (
        <div className="h-full w-full bg-[#f7f7f7] rounded p-24">

            <div className="h-full flex flex-col justify-between">

                <div>
                    <h4 className="text-[#8a8a8a]">Linköping, Sweden</h4>
                    <div className="flex items-center gap-24 overflow-hidden">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[#8a8a8a]">12:35</h4>
                            <div className="flex items-center gap-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                                <h1 className="display text-black font-bold">20°</h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-20">
                            <div className="flex flex-col items-center gap-2">
                                <h4 className="text-[#8a8a8a]">13:00</h4>
                                <h4 className="font-bold text-[#8a8a8a]">+22</h4>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <h4 className="text-[#8a8a8a]">14:00</h4>
                                <h4 className="font-bold text-[#8a8a8a]">+22</h4>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <h4 className="text-[#8a8a8a]">15:00</h4>
                                <h4 className="font-bold text-[#8a8a8a]">+22</h4>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <h4 className="text-[#8a8a8a]">16:00</h4>
                                <h4 className="font-bold text-[#8a8a8a]">+22</h4>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <h4 className="text-[#8a8a8a]">17:00</h4>
                                <h4 className="font-bold text-[#8a8a8a]">+22</h4>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <h4 className="text-[#8a8a8a]">18:00</h4>
                                <h4 className="font-bold text-[#8a8a8a]">+22</h4>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex items-center w-full justify-between">
                    <div className="flex flex-col items-center gap-2">
                        <h4>Mon</h4>
                        <h4 className="font-bold">17</h4>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <h4>Tis</h4>
                        <h4 className="font-bold">2</h4>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <h4>Ons</h4>
                        <h4 className="font-bold">27</h4>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <h4>Tors</h4>
                        <h4 className="font-bold">17</h4>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <h4>Fre</h4>
                        <h4 className="font-bold">-1</h4>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <h4>Lör</h4>
                        <h4 className="font-bold">24</h4>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <h4>Sön</h4>
                        <h4 className="font-bold">12</h4>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WeatherCard