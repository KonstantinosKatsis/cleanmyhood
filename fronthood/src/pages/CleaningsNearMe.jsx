import { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Map from "../components/Map";

export default function CleaningsNearMe() {
    const [sliderValue, setSliderValue] = useState(10);
    const [radius, setRadius] = useState(10); // in km
    const debounceTimeout = useRef(null);

    const handleChange = (e) => {
        const value = Number(e.target.value);
        setSliderValue("∞");

        setSliderValue(value);

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            setRadius(value);
        }, 300);
    };

    return (
        <>
            <NavBar />
            <div className="max-w-5xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Cleanings Near Me
                </h1>
                <div className="mb-6 flex flex-col items-center space-y-2">
                    <label htmlFor="radius" className="font-semibold">
                        Select radius (km):{" "}
                        {sliderValue > 100 ? "∞" : sliderValue} km
                    </label>
                    <input
                        id="radius"
                        type="range"
                        min="1"
                        max="101"
                        step="1"
                        className="w-64"
                        value={sliderValue}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="container mx-auto w-7/8 min-h-96 shadow-lg rounded-lg overflow-hidden bg-gray-300 flex items-center justify-center">
                {radius === sliderValue && (
                    <Map
                        nearbyHoods={true}
                        searchParameters={{
                            radius: radius > 100 ? 1000 : radius, // Limit to 100 km
                        }}
                    />
                )}
            </div>
        </>
    );
}
