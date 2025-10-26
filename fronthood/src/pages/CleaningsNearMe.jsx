import { useState, useRef } from "react";
import { Layout, NearByMap } from "../components";

export function CleaningsNearMe() {
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
            <Layout>
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
                <div className="container mx-auto w-7/8 h-lvh shadow-lg rounded-lg overflow-hidden bg-gray-300 flex items-center justify-center">
                    {radius === sliderValue && (
                        <NearByMap radius={radius > 100 ? 1000 : radius} />
                    )}
                </div>{" "}
            </Layout>
        </>
    );
}
