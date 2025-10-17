export function ImageUploader({ handleFileChange }) {
    return (
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4M21 12h-4m0 0v8m0-8l-4 4m4-4l4 4"
                    ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-400">PNG, JPG (max 10MB)</p>
            </div>

            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                capture="environment"
            />
        </label>
    );
}
