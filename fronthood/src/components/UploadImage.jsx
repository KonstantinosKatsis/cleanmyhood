import { useState, useRef, useEffect } from "react";
import { uploadCleanedImage } from "../services/HoodService";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { isLattitudeAndLongitudeEmpty } from "../utils/LocationHelper";
import { PopupMessage, ImageUploader, PrivacyPolicy } from ".";

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
            }, 2000);
            return;
        }

        if (!selectedFile) {
            setShowPopup(true);
            setPopupMessage("Please select a file first!");
            timeoutRef.current = setTimeout(() => {
                setShowPopup(false);
            }, 2000);
            return;
        }

        setUploading(true);
        try {
            const response = await uploadCleanedImage(
                hoodUuid,
                selectedFile,
                location
            );
            if (response.status !== "success") {
                setShowPopup(true);
                setPopupMessage(
                    `Failed to upload image uploaded. ${response.error}`
                );
                timeoutRef.current = setTimeout(() => {
                    setShowPopup(false);
                }, 2000);

                return;
            }

            setShowPopup(true);
            setPopupMessage("Image uploaded successfully! 🎉");
            timeoutRef.current = setTimeout(() => {
                setShowPopup(false);
            }, 1000);
            setSelectedFile(null);
            setPreview(null);
        } catch (err) {
            console.error(err);
            setPopupMessage("Failed to upload image. Please try again!");
            timeoutRef.current = setTimeout(() => {
                setShowPopup(false);
            }, 2000);
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
            <ImageUploader handleFileChange={handleFileChange} />
            {preview && (
                <div className="mb-4">
                    <div className="w-full max-h-[80vh] rounded border">
                        <img
                            loading="lazy"
                            src={preview}
                            alt="Preview"
                            className="w-full block object-contain"
                        />
                    </div>
                </div>
            )}
            <PrivacyPolicy />
            <button
                onClick={handleUpload}
                disabled={uploading}
                className="mt-2 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors cursor-pointer disabled:opacity-50"
            >
                {uploading ? "Uploading..." : "Upload Photo"}
            </button>
        </div>
    );
}
