import requestService from "./RequestService";

const searchHoods = async (searchParameters) => {
    try {
        const data = await requestService.getHoods(searchParameters);
        return data || [];
    } catch (err) {
        return err.data || [];
    }
};

const searchHoodByUuid = async (uuid) => {
    try {
        const data = await requestService.getHood(uuid);
        return data || [];
    } catch (err) {
        return err.data || [];
    }
};

export default {
    searchHoods,
    searchHoodByUuid,
};
