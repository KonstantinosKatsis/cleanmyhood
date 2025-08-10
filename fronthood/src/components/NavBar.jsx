import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
            <div
                onClick={() => navigate("/")}
                className="text-xl font-bold text-green-700  cursor-pointer"
            >
                Cleanmyhood
            </div>
            <div className="flex items-center space-x-2">
                <div className="relative">
                    <select className="border border-gray-300 rounded px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                        <option value="en">English</option>
                        <option value="el">Greek</option>
                    </select>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors cursor-pointer">
                    Report a Cleaning
                </button>
            </div>
        </nav>
    );
}
