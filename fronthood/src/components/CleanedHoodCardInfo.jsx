import { useNavigate } from "react-router-dom";

export function CleanedHoodCardInfo({ hood }) {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-gray-600 flex-1 m-0!">
                Join us in keeping this area clean and beautiful. Every little
                effort counts!
            </p>
            <button
                onClick={() => navigate(`/cleaning/${hood.uuid}`)}
                className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors cursor-pointer"
            >
                View Details
            </button>
        </>
    );
}
