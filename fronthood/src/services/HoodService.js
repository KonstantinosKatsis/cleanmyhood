import {
    getHoods,
    getHood,
    uploadCleanedHoodImage,
    store,
    getCleanedHoods,
} from "./RequestService";

const searchHoods = async (searchParameters) => {
    try {
        const data = await getHoods(searchParameters);
        return data || [];
    } catch (err) {
        return err.data || [];
    }
};

const searchCleanedHoods = async (searchParameters) => {
    try {
        const data = await getCleanedHoods(searchParameters);
        return data || [];
    } catch (err) {
        return err.data || [];
    }
};

const searchHoodByUuid = async (uuid) => {
    try {
        const data = await getHood(uuid);
        return data || [];
    } catch (err) {
        return err.data || [];
    }
};

const uploadCleanedImage = async (hoodUuid, imageFile, location) => {
    try {
        const data = await uploadCleanedHoodImage(
            hoodUuid,
            imageFile,
            location
        );
        return data || [];
    } catch (err) {
        return err.data || [];
    }
};

const storeHoods = async (body) => {
    try {
        const data = await store(body);
        return data || [];
    } catch (err) {
        return err.data || [];
    }
};

export {
    searchHoods,
    searchHoodByUuid,
    uploadCleanedImage,
    storeHoods,
    searchCleanedHoods,
};
