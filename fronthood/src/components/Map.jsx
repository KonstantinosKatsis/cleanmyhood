import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import leaflet from "leaflet";
import { useState, useEffect } from "react";
import hoodService from "../services/HoodService";
import useGeoLocation from "../hooks/useGeoLocation";
import Loader from "../components/Loader";
import customIconUrl from "../assets/marker.svg";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

function Map() {
    const [hoods, setHoods] = useState([]);
    const location = useGeoLocation();

    useEffect(() => {
        const fetchHoods = async () => {
            const result = await hoodService.searchHoods();
            setHoods(result.data || []);
        };
        fetchHoods();
    }, []);

    if (isLattitudeAndLongitudeEmpty(location)) {
        if (!location.error) {
            return <Loader />;
        }

        console.log(location.error);
    }

    const customIcon = leaflet.icon({
        iconUrl: customIconUrl,
        shadowUrl: shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    return (
        <MapContainer
            center={[
                location.latitude ?? 39.0742,
                location.longitude ?? 21.8243,
            ]}
            zoom={23}
            minZoom={7}
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
                        <strong>{hood.name}</strong>
                        <div className="mt-2">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nFRGJi1sm_zykNWyQ2rdYk0jKlRlLnB0aqlDwz6mz7M-BD1GKc7HO-wB0uJHMgESknE&usqp=CAU"
                                alt={hood.name}
                                className="w-32 h-20 object-cover rounded"
                            />
                        </div>
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

export default Map;
