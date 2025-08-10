import axios from "axios";

export const getHoods = async (searchParameters) => {
    const res = await axios.get("/api/hoods", {
        params: searchParameters,
    });
    return res.data;
};

export default {
    getHoods,
};
