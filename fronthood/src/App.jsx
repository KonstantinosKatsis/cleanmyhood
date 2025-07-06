import "./App.css";
import "leaflet/dist/leaflet.css";
import hoodService from "./services/HoodService";
import Map from "./components/Map";

function App() {
    return (
        <>
            <div>
                <Map />
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => hoodService.searchHoods()}>
                    Get Hoods
                </button>
            </div>
        </>
    );
}

export default App;
