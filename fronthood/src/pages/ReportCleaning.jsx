import { useState } from "react";
import { Layout } from "../components";
// import { useGeoLocation } from "../hooks/useGeoLocation";

export function ReportCleaning() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        latitude: "",
        longitude: "",
        image: null,
    });
    const [preview, setPreview] = useState(null);

    // const location = useGeoLocation();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }

        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (
            !formData.name ||
            !formData.description ||
            // !formData.latitude ||
            // !formData.longitude ||
            !formData.image
        ) {
            alert("All fields are required!");
            return;
        }
    };

    return (
        <Layout>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-6">
                <h2 className="text-2xl font-bold mb-6 text-green-700">
                    Add a New Hood
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>
                    </div>

                    {/* Hidden Latitude/Longitude */}
                    <input
                        type="hidden"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleChange}
                    />
                    <input
                        type="hidden"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleChange}
                    />

                    {/* Image Upload */}
                    <div>
                        {preview && (
                            <div className="mb-4">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-full h-screen object-cover rounded"
                                />
                            </div>
                        )}
                        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
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
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>
                                </p>
                                <p className="text-xs text-gray-400">
                                    PNG, JPG (max 10MB)
                                </p>

                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleChange}
                                    required
                                    className="hidden"
                                    capture="environment"
                                />
                            </div>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors cursor-pointer mt-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </Layout>
    );
}
