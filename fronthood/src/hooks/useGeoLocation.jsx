import { useEffect, useState } from "react";

const useGeoLocation = (nearbyHoods = false) => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        error: null,
    });

    useEffect(() => {
        if (!nearbyHoods) {
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                console.log("Geolocation obtained:", { latitude, longitude });
            },
            (error) => {
                setLocation({
                    latitude: null,
                    longitude: null,
                    error: `Error getting geolocation: ${error.message}`,
                });
            }
        );
    }, [nearbyHoods]);

    return location;
};

export default useGeoLocation;
