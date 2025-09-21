import { getHoods, getHood, uploadCleaningHoodImage } from "./RequestService";

const searchHoods = async (searchParameters) => {
    try {
        const data = await getHoods(searchParameters);
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

const uploadCleaningImage = async (hoodUuid, imageFile) => {
    try {
        const data = await uploadCleaningHoodImage(hoodUuid, imageFile);
        return data || [];
    } catch (err) {
        return err.data || [];
    }
};

export { searchHoods, searchHoodByUuid, uploadCleaningImage };
