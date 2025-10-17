import axios from "axios";

const getHoods = async (searchParameters) => {
    // const url = uuid ? `/api/hoods/${uuid}` : `/api/hoods`;
    const url = `/api/hoods`;
    const res = await axios.get(url, {
        params: searchParameters,
    });

    return res.data;
};

const getHood = async (uuid) => {
    const url = `/api/hoods/${uuid}`;
    const res = await axios.get(url);

    return res.data;
};

const uploadCleanedHoodImage = async (hoodUuid, imageFile, location) => {
    const url = `/api/hoods/${hoodUuid}/upload-image`;

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("metadata", JSON.stringify(location));

    const res = await axios.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        location,
    });

    return res.data;
};

const store = async (body) => {
    const url = `/api/hoods`;
    const res = await axios.post(url, body);

    return res.data;
};

export { getHoods, getHood, uploadCleanedHoodImage, store };
