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

const uploadCleaningImage = async (hoodUuid, imageFile) => {
    const url = `/api/hoods/${hoodUuid}/upload-image`;

    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await axios.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return res.data;
};

export default {
    getHoods,
    getHood,
    uploadCleaningImage,
};
