import { useEffect, useState } from "react";

export const useGeoLocation = () => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        error: null,
    });

    const fetchLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude, error: null });
            },
            (error) => {
                setLocation({
                    latitude: null,
                    longitude: null,
                    error: `Error getting geolocation: ${error.message}`,
                });
            }
        );
    };

    useEffect(() => {
        fetchLocation();

        if ("permissions" in navigator) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then((permissionStatus) => {
                    permissionStatus.onchange = () => {
                        if (permissionStatus.state === "granted") {
                            fetchLocation();
                            return;
                        }

                        setLocation({
                            latitude: null,
                            longitude: null,
                            error: null,
                        });
                    };
                });
        }
    }, []);

    return location;
};
