import { useState } from "react";
import hoodService from "../services/HoodService";

export default function UploadImage({ hoodUuid }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return alert("Please select a file first!");

        setUploading(true);
        try {
            const response = await hoodService.uploadCleaningImage(
                hoodUuid,
                selectedFile
            );
            if (response.status !== "success") {
                alert("Failed to upload image uploaded. Please try again.");

                return;
            }

            alert("Image uploaded successfully! 🎉");
            setSelectedFile(null);
            setPreview(null);
        } catch (err) {
            console.error(err);
            alert("Failed to upload image. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="mt-6 border-t pt-4">
            <p className="text-gray-700 mb-2">
                All done with the cleaning? 🎉 Snap a quick photo of the cleaned
                area before you leave and upload it here. Once we confirm the
                cleanup, the status will be updated.
            </p>
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
                        <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG (max 5MB)</p>
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>

            {preview && (
                <div className="mb-4">
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-screen object-cover rounded"
                    />
                </div>
            )}
            <button
                onClick={handleUpload}
                disabled={uploading}
                className="mt-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors cursor-pointer disabled:opacity-50"
            >
                {uploading ? "Uploading..." : "Upload Photo"}
            </button>
        </div>
    );
}
