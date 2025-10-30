export function HoodImageCard({ image, label, title, description, openImage }) {
    const STORAGE_BASE = import.meta.env.VITE_STORAGE_URL;

    return (
        <>
            <div
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => openImage(`${STORAGE_BASE}${image}`)}
            >
                <div className="relative">
                    <img
                        loading="lazy"
                        src={`${STORAGE_BASE}${image}`}
                        alt={`${title} ${label}`}
                        className="w-full h-72 object-cover"
                    />
                    <span
                        className={`absolute top-4 left-4 bg-${
                            label === "Before" ? "red-600" : "green-700"
                        } text-white text-sm font-semibold px-3 py-1 rounded-md shadow`}
                    >
                        {label}
                    </span>
                </div>
                <div className="p-4">
                    <p className="text-gray-600 text-sm">{description}</p>
                </div>
            </div>
        </>
    );
}
