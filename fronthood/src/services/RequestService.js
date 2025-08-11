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

export default {
    getHoods,
    getHood,
};
