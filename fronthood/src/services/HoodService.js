import requestService from "./RequestService";

export const searchHoods = async (searchParameters) => {
    try {
        const data = await requestService.getHoods(searchParameters);
        return data || [];
    } catch (err) {
        return err.data || [];
    }
};

export default {
    searchHoods,
};
