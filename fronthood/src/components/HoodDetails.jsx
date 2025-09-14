import { Map, UploadImage } from ".";

export default function HoodDetails({ hood, hoods }) {
    const location = {
        latitude: hood?.latitude || null,
        longitude: hood?.longitude || null,
    };

    return (
        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-white shadow-lg rounded-lg">
                <img
                    src={getHoodImage(hood)}
                    alt={hood?.name}
                    className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-2xl font-bold mb-4 text-green-700">
                    {hood?.name || "Unknown"}
                </h2>
                <p className="text-gray-700 mb-4">{hood?.description}</p>
                <p className="text-sm text-gray-500">
                    Location: {hood?.location || "Unknown"} <br />
                    Latitude: {hood?.latitude}, Longitude: {hood?.longitude}
                </p>
                <button
                    onClick={() => {
                        const coords = `${hood?.latitude}, ${hood?.longitude}`;
                        navigator.clipboard.writeText(coords);
                        alert("Coordinates copied to clipboard!");
                    }}
                    className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                    Copy Location
                </button>
                <UploadImage hoodUuid={hood.uuid} />
            </div>

            <div className="flex-1 h-full shadow-lg rounded-lg overflow-hidden bg-gray-300">
                <Map
                    hoods={hoods}
                    location={location}
                    radius={10}
                    popup={false}
                />
            </div>
        </div>
    );
}

function getHoodImage(hood) {
    return hood.imageUrl
        ? hood.imageUrl
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-lFmAvBcHv3lfofE0-RN_AmzZboq4IXLGA&s";
}
