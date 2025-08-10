import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import leaflet from "leaflet";
import { useState, useEffect } from "react";
import hoodService from "../services/HoodService";
import useGeoLocation from "../hooks/useGeoLocation";
import Loader from "./Loader";
import Card from "./Card";
import customIconUrl from "../assets/marker.svg";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

export default function Map({ nearbyHoods, searchParameters }) {
    const [hoods, setHoods] = useState([]);
    const location = useGeoLocation(nearbyHoods);

    useEffect(() => {
        if (isLattitudeAndLongitudeEmpty(location)) {
            return;
        }

        const fetchHoods = async (searchParameters) => {
            const result = await hoodService.searchHoods(searchParameters);
            setHoods(result.data || []);
        };
        fetchHoods({ ...location, ...searchParameters });
    }, [searchParameters, location]);

    if (isLattitudeAndLongitudeEmpty(location)) {
        if (nearbyHoods && !location.error) {
            return <Loader />;
        }

        console.log(location.error);

        return (
            <div className="flex items-center justify-center">
                <p className="text-gray-700 text-lg">
                    Please enable location services to find nearby cleanings.
                </p>
            </div>
        );
    }

    const customIcon = leaflet.icon({
        iconUrl: customIconUrl,
        shadowUrl: shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    const greeceBounds = [
        [34.5, 19], // SW corner lat,lng
        [42, 29.9], // NE corner lat,lng
    ];

    return (
        <MapContainer
            center={[
                location.latitude ?? 39.0742,
                location.longitude ?? 21.8243,
            ]}
            zoom={Math.round(16 - Math.log2(searchParameters.radius))}
            maxBounds={greeceBounds}
            style={{ height: "100vh", width: "100%" }}
        >
            {location.latitude && location.longitude && (
                <Marker
                    position={[location.latitude, location.longitude]}
                    icon={customIcon}
                >
                    <Popup>Your current location</Popup>
                </Marker>
            )}

            {hoods.map((hood, index) => (
                <Marker key={index} position={[hood.latitude, hood.longitude]}>
                    <Popup>
                        <Card hood={hood} />
                    </Popup>
                </Marker>
            ))}

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
            />
        </MapContainer>
    );
}

function isLattitudeAndLongitudeEmpty(location) {
    return !location.latitude || !location.longitude;
}
