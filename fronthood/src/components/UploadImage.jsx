import { useState, useRef, useEffect } from "react";
import { uploadCleaningImage } from "../services/HoodService";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { isLattitudeAndLongitudeEmpty } from "../utils/LocationHelper";
import { PopupMessage } from ".";

export function UploadImage({ hoodUuid }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState(null);
    const location = useGeoLocation();

    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        if (isLattitudeAndLongitudeEmpty(location)) {
            setShowPopup(true);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            setPopupMessage("Please provide your location to upload an image");
            timeoutRef.current = setTimeout(() => {
                setShowPopup(false);
            }, 1000);
            return;
        }

        if (!selectedFile) {
            setShowPopup(true);
            setPopupMessage("Please select a file first!");
            timeoutRef.current = setTimeout(() => {
                setShowPopup(false);
            }, 1000);
            return;
        }

        setUploading(true);
        try {
            const response = await uploadCleaningImage(hoodUuid, selectedFile);
            if (response.status !== "success") {
                setShowPopup(true);
                setPopupMessage(
                    "Failed to upload image uploaded. Please try again!"
                );
                timeoutRef.current = setTimeout(() => {
                    setShowPopup(false);
                }, 1000);

                return;
            }

            setShowPopup(true);
            setPopupMessage("Image uploaded successfully! 🎉");
            timeoutRef.current = setTimeout(() => {
                setShowPopup(false);
            }, 2000);
            setSelectedFile(null);
            setPreview(null);
        } catch (err) {
            console.error(err);
            setPopupMessage("Failed to upload image. Please try again!");
            timeoutRef.current = setTimeout(() => {
                setShowPopup(false);
            }, 1000);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="mt-6 border-t pt-4 relative">
            {showPopup && <PopupMessage message={popupMessage} />}

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
                disabled={uploading || isLattitudeAndLongitudeEmpty(location)}
                className="mt-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors cursor-pointer disabled:opacity-50"
            >
                {uploading ? "Uploading..." : "Upload Photo"}
            </button>
        </div>
    );
}
