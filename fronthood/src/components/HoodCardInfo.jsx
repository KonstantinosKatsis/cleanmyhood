import { useNavigate } from "react-router-dom";

export function HoodCardInfo({ hood }) {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-gray-600 flex-1">
                The community has successfully cleaned this area. Great job
                everyone!
            </p>
            <button
                onClick={() => navigate(`cleaned/${hood.uuid}`)}
                className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors cursor-pointer"
            >
                View Details
            </button>
        </>
    );
}
