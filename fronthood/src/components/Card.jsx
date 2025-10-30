import { HoodCardInfo, CleanedHoodCardInfo } from ".";

export function Card({ hood }) {
    const STORAGE_BASE = import.meta.env.VITE_STORAGE_URL;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <img
                loading="lazy"
                src={`${STORAGE_BASE}${hood.before_image}`}
                alt={hood.name}
                className="h-40 w-full object-cover"
            />

            <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800">
                    {hood.name}
                </h3>
                <p className="text-sm text-gray-500 m-0! mt-1 mb-2!">
                    {hood.location || "Athens, Greece"}
                </p>

                {hood.after_image ? (
                    <HoodCardInfo hood={hood} />
                ) : (
                    <CleanedHoodCardInfo hood={hood} />
                )}
            </div>
        </div>
    );
}
