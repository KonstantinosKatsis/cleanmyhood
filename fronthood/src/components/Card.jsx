import { useNavigate } from "react-router-dom";

export default function Card({ hood }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-lFmAvBcHv3lfofE0-RN_AmzZboq4IXLGA&s"
                alt={hood.name}
                className="h-40 w-full object-cover"
            />

            <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {hood.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                    {hood.location || "Athens, Greece"}
                </p>
                <p className="text-gray-600 flex-1">
                    Join us in keeping this area clean and beautiful. Every
                    little effort counts!
                </p>
                <button
                    onClick={() => navigate(`/cleaning/${hood.uuid}`)}
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors cursor-pointer"
                >
                    Click Me
                </button>
            </div>
        </div>
    );
}
