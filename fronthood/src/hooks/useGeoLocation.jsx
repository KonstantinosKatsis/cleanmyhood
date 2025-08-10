import { useEffect, useState } from "react";

const useGeoLocation = (nearbyHoods = false) => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        zoom: null,
        error: null,
    });

    useEffect(() => {
        if (!nearbyHoods) {
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude, zoom: 23 });
            },
            (error) => {
                setLocation({
                    latitude: null,
                    longitude: null,
                    error: `Error getting geolocation: ${error.message}`,
                });
            }
        );
    }, []);

    return location;
};

export default useGeoLocation;
