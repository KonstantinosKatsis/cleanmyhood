export default function NavBar() {
    return (
        <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
            {/* Left - Site Name */}
            <div className="text-xl font-bold text-green-700">Cleanmyhood</div>

            {/* Right - Menu */}
            <div className="flex items-center space-x-6">
                {/* Language Dropdown */}
                <div className="relative">
                    <select className="border border-gray-300 rounded px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option value="en">English</option>
                        <option value="el">Greek</option>
                    </select>
                </div>

                {/* Report a Cleaning Button */}
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                    Report a Cleaning
                </button>
            </div>
        </nav>
    );
}
