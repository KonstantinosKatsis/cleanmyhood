import { useState } from "react";
import { HoodImageCard } from "../components";

export function CleanedHood({ hood }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (imgUrl) => setSelectedImage(imgUrl);
    const closeImage = () => setSelectedImage(null);

    return (
        <div className="max-w-6xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                {hood?.name || "Hood Cleaning"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <HoodImageCard
                    image={hood.before_image}
                    label="Before"
                    title={hood.name}
                    description="This is how the hood looked before cleaning."
                    openImage={openImage}
                />

                <HoodImageCard
                    image={hood.after_image}
                    label="After"
                    title={hood.name}
                    description="This is how the hood looks after cleaning."
                    openImage={openImage}
                />
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1002]">
                    <img
                        src={selectedImage}
                        alt="Fullscreen"
                        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                    />
                    <button
                        className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-gray-300 cursor-pointer"
                        onClick={closeImage}
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
}
