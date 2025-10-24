import { useState } from "react";

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
                <div
                    className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] cursor-pointer"
                    onClick={() => openImage(hood.before_image)}
                >
                    <div className="relative">
                        <img
                            src={hood.before_image}
                            alt={`${hood?.name} before`}
                            className="w-full h-72 object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-md shadow">
                            Before
                        </span>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-600 text-sm">
                            This is how the hood looked before cleaning.
                        </p>
                    </div>
                </div>

                <div
                    className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] cursor-pointer"
                    onClick={() => openImage(hood.after_image)}
                >
                    <div className="relative">
                        <img
                            src={hood.after_image}
                            alt={`${hood?.name} after`}
                            className="w-full h-72 object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-md shadow">
                            After
                        </span>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-600 text-sm">
                            After a professional clean — spotless and safe.
                        </p>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={closeImage}
                >
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
