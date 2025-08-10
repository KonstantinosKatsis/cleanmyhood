import "./App.css";
import "leaflet/dist/leaflet.css";
import hoodService from "./services/HoodService";
import Map from "./components/Map";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <section className="text-center max-w-2xl mx-auto px-4 py-8">
                <p className="text-lg text-gray-700 mb-6">
                    <strong>CleanMyHood</strong> helps communities across Greece
                    keep their neighborhoods clean. Snap a photo of a spot that
                    needs cleaning, share its location, and we’ll make it
                    visible for volunteers to take action. You can also discover
                    ongoing cleaning events near you and join the effort to make
                    our streets cleaner and greener.
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition-colors">
                    Cleanings Near Me
                </button>
            </section>

            <div className="container">
                <Map nearbyHoods={true} />
            </div>
            <div className="card">
                <Card />
                <button onClick={() => hoodService.searchHoods()}>
                    Get Hoods
                </button>
            </div>
        </>
    );
}

export default App;
