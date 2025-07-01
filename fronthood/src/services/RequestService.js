import axios from "axios";

export const getHoods = async () => {
    const res = await axios.get("/api/hoods");
    return res.data;
};

export default {
    getHoods,
};
