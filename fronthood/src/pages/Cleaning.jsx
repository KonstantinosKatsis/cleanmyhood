import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import hoodService from "../services/HoodService";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Cleaning() {
    const { uuid } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ["hood", uuid], // unique key for caching
        queryFn: () =>
            hoodService.searchHoodByUuid(uuid).then((res) => res.data),
        staleTime: 5 * 60 * 1000, // cache for 5 minutes
    });

    const hood = data ? data[0] : null;
    const hoods = data || [];

    const location = hood
        ? { latitude: hood.latitude, longitude: hood.longitude, error: null }
        : { latitude: null, longitude: null, error: null };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return (
            <>
                <div className="text-center py-20 text-red-600">
                    Error loading data. Please try again later.
                </div>
            </>
        );
    }

    return (
        <>
            <NavBar />
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
                        {!hood?.imageUrl && ( //Todo fix this once hood image works
                            <img
                                src={
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-lFmAvBcHv3lfofE0-RN_AmzZboq4IXLGA&s"
                                }
                                alt={hood.name}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                        )}
                        <h2 className="text-2xl font-bold mb-4 text-green-700">
                            {hood?.name || "Unknown"}
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Join us in keeping this area clean and beautiful.
                            Every little effort counts! We’ll gather volunteers
                            to remove litter, tidy up public spaces, and restore
                            the beauty of our community. Bring gloves, bags, and
                            a positive attitude!
                        </p>
                        <p className="text-gray-700 mb-4">
                            {hood?.description}
                        </p>
                        <p className="text-sm text-gray-500">
                            Location: {hood?.location || "Unknown"} <br />
                            Latitude: {hood?.latitude}, Longitude:{" "}
                            {hood?.longitude}
                        </p>
                        <button
                            onClick={() => {
                                const coords = `${hood?.latitude}, ${hood?.longitude}`;
                                navigator.clipboard.writeText(coords);
                                alert("Coordinates copied to clipboard!");
                            }}
                            className="mt-1 bg-blue-600 text-white py-2 px-2 rounded hover:bg-blue-700 transition-colors cursor-pointer"
                        >
                            Copy Location
                        </button>
                        <p className="mt-4 text-gray-700">
                            Have you finished with the cleaning? Upload an image
                            and the cleaning will be resolved. Once the cleaning
                            is confirmed, we will send you a confirmation email.
                        </p>
                    </div>
                    <div className="flex-1 h-screen shadow-lg rounded-lg overflow-hidden bg-gray-300">
                        <Map
                            hoods={hoods}
                            location={location}
                            radius={10}
                            popup={false}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
