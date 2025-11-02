import { useState, useEffect, lazy, Suspense } from "react";
import { searchHoods } from "../services/HoodService";
import { isLattitudeAndLongitudeEmpty } from "../utils/LocationHelper";

const LazyMap = lazy(() => import("./Map"));

export function NearByMap({ radius, location }) {
    const [hoods, setHoods] = useState([]);

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

    return (
        <Suspense
            fallback={
                <div className="flex m-auto text-gray-600">Loading map...</div>
            }
        >
            <LazyMap hoods={hoods} location={location} radius={radius} />
        </Suspense>
    );
}
