import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

const getHoods = async (searchParameters) => {
    const url = `${API_BASE}/api/hoods`;
    const response = await axios.get(url, {
        params: searchParameters,
    });

    return response.data;
};

const getCleanedHoods = async (searchParameters) => {
    const url = `${API_BASE}/api/cleaned-hoods`;
    const response = await axios.get(url, {
        params: searchParameters,
    });

    return response.data;
};

const getHood = async (uuid) => {
    const url = `${API_BASE}/api/hoods/${uuid}`;
    const response = await axios.get(url);

    return response.data;
};

const getCleanedHood = async (uuid) => {
    const url = `${API_BASE}/api/cleaned-hoods/${uuid}`;
    const response = await axios.get(url);

    return response.data;
};

const uploadCleanedHoodImage = async (hoodUuid, imageFile, location) => {
    const url = `${API_BASE}/api/hoods/${hoodUuid}/upload-image`;

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("metadata", JSON.stringify(location));

    const response = await axios.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        location,
    });

    return response.data;
};

const store = async (body) => {
    const url = `${API_BASE}/api/hoods`;
    const response = await axios.post(url, body);

    return response.data;
};

export {
    getHoods,
    getHood,
    uploadCleanedHoodImage,
    store,
    getCleanedHoods,
    getCleanedHood,
};
