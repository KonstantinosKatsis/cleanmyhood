import { useState, useEffect } from "react";
import { searchHoods } from "../services/HoodService";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { isLattitudeAndLongitudeEmpty } from "../utils/LocationHelper";
import { Map } from ".";

export function NearByMap({ radius }) {
    const [hoods, setHoods] = useState([]);
    const location = useGeoLocation();

    useEffect(() => {
        if (isLattitudeAndLongitudeEmpty(location)) {
            return;
        }

        const fetchHoods = async (searchParameters) => {
            const result = await searchHoods(searchParameters);
            setHoods(result.data || []);
        };
        fetchHoods({ ...location, ...{ radius: radius } });
    }, [radius, location]);

    return <Map hoods={hoods} location={location} radius={radius} />;
}
