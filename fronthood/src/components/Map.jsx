import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import leaflet from "leaflet";
import { Card, Loader } from ".";
import customIconUrl from "../assets/marker.svg";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { isLattitudeAndLongitudeEmpty } from "../utils/LocationHelper";
import React, { useMemo } from "react";

const Map = React.memo(function Map({ hoods, location, radius, popup = true }) {
    const customIcon = useMemo(
        () =>
            leaflet.icon({
                iconUrl: customIconUrl,
                shadowUrl: shadowUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41],
            }),
        []
    );

    const greeceBounds = useMemo(
        () => [
            [34.5, 19], // SW corner lat,lng
            [46, 29.9], // NE corner lat,lng
        ],
        []
    );

    const center = useMemo(
        () => [location.latitude ?? 39.0742, location.longitude ?? 21.8243],
        [location.latitude, location.longitude]
    );

    if (isLattitudeAndLongitudeEmpty(location)) {
        if (!location.error) {
            return <Loader />;
        }
        return (
            <div className="flex items-center justify-center">
                <p className="text-gray-700 text-lg">
                    Please enable location services to find nearby cleanings.
                </p>
            </div>
        );
    }

    return (
        <MapContainer
            center={center}
            zoom={Math.round(15.45 - Math.log2(radius))}
            maxBounds={greeceBounds}
            style={{ height: "100%", width: "100%" }}
        >
            {location.latitude && location.longitude && (
                <Marker
                    position={[location.latitude, location.longitude]}
                    icon={customIcon}
                >
                    <Popup>Your current location</Popup>
                </Marker>
            )}

            {hoods.map((hood) => (
                <Marker
                    key={
                        hood.uuid ||
                        hood.id ||
                        `${hood.latitude},${hood.longitude}`
                    }
                    position={[hood.latitude, hood.longitude]}
                >
                    {popup && (
                        <Popup>
                            <Card hood={hood} />
                        </Popup>
                    )}
                </Marker>
            ))}

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
            />
        </MapContainer>
    );
});

export default Map;
