import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import hoodService from "../services/HoodService";

function Map() {
    const [hoods, setHoods] = useState([]);

    useEffect(() => {
        const fetchHoods = async () => {
            const result = await hoodService.searchHoods();
            setHoods(result.data || []);
        };
        fetchHoods();
    }, []);

    return (
        <MapContainer
            center={[39.0742, 21.8243]}
            zoom={7}
            minZoom={7}
            maxBounds={[
                [34, 19],
                [42, 30],
            ]}
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
            />
            {hoods.map((hood, index) => (
                <Marker key={index} position={[hood.latitude, hood.longitude]}>
                    <Popup>
                        <strong>{hood.name}</strong>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;
