import { useEffect, useState } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        error: null,
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
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
