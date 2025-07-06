import requestService from "./RequestService";

export const searchHoods = async () => {
    try {
        const data = await requestService.getHoods();
        return data || [];
    } catch (err) {
        return err.data || [];
    }
};

export default {
    searchHoods,
};
