import "./App.css";
import "leaflet/dist/leaflet.css";
import Home from "./pages/Home";
import CleaningsNearMe from "./pages/CleaningsNearMe";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/cleanings-near-me"
                    element={<CleaningsNearMe />}
                />
            </Routes>
        </>
    );
}

export default App;
