import {
    getHoods,
    getHood,
    uploadCleanedHoodImage,
    store,
    getCleanedHoods,
    getCleanedHood,
} from "./RequestService";

const searchHoods = async (searchParameters) => {
    try {
        return await getHoods(searchParameters);
    } catch (err) {
        throw err.response?.data || err;
    }
};

const searchCleanedHoods = async (searchParameters) => {
    try {
        return await getCleanedHoods(searchParameters);
    } catch (err) {
        throw err.response.data || err;
    }
};

const searchHoodByUuid = async (uuid) => {
    try {
        return await getHood(uuid);
    } catch (err) {
        throw err.response.data || err;
    }
};

const searchCleanedHoodByUuid = async (uuid) => {
    try {
        return await getCleanedHood(uuid);
    } catch (err) {
        throw err.response.data || err;
    }
};

const uploadCleanedImage = async (hoodUuid, imageFile, location) => {
    try {
        return await uploadCleanedHoodImage(hoodUuid, imageFile, location);
    } catch (err) {
        throw err.response.data || err;
    }
};

const storeHoods = async (body) => {
    try {
        return await store(body);
    } catch (err) {
        throw err.response.data || err;
    }
};

export {
    searchHoods,
    searchHoodByUuid,
    uploadCleanedImage,
    storeHoods,
    searchCleanedHoods,
    searchCleanedHoodByUuid,
};
