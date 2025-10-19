import { useState } from "react";
import { Layout, PopupMessage, ImageUploader, Loader } from "../components";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { isLattitudeAndLongitudeEmpty } from "../utils/LocationHelper";
import { storeHoods } from "../services/HoodService";

export function ReportCleaning() {
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const location = useGeoLocation();

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        setImageFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLattitudeAndLongitudeEmpty(location)) {
            setShowPopup(true);
            setPopupMessage("Please provide your location to upload an image");
            return;
        }

        if (!imageFile) {
            setPopupMessage("Please upload an image before submitting.");
            setShowPopup(true);
            return;
        }

        setIsLoading(true);

        const formData = new FormData();
        formData.append("0[name]", e.target.name.value);
        formData.append("0[description]", e.target.description.value);
        formData.append("0[latitude]", location.latitude);
        formData.append("0[longitude]", location.longitude);
        formData.append("0[before_image]", imageFile);

        const data = await storeHoods(formData);
        setShowPopup(true);

        if (data.status !== "success") {
            setPopupMessage(data.error);
            return;
        }

        e.target.reset();
        setPopupMessage("Cleaning report submitted successfully. Thank you!");
        setIsLoading(false);
        setPreview(null);
    };

    return (
        <Layout>
            {isLoading && <Loader />}
            {showPopup && (
                <PopupMessage
                    message={popupMessage}
                    onClose={() => setShowPopup(false)}
                />
            )}
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-6">
                <h2 className="text-2xl font-bold mb-6 text-green-700">
                    Report Cleaning
                </h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            required
                            className="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows="5"
                        ></textarea>
                    </div>
                    <div>
                        <input type="hidden" name="latitude" />
                        <input type="hidden" name="longitude" />
                    </div>
                    {preview && (
                        <div className="mb-4">
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full h-2/5 object-cover rounded"
                            />
                        </div>
                    )}
                    <ImageUploader handleFileChange={handleFileChange} />
                    <div>
                        <input
                            type="submit"
                            value="Submit Report"
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </Layout>
    );
}
