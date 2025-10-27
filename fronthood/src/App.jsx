import "./App.css";
import "leaflet/dist/leaflet.css";
import {
    Home,
    CleaningsNearMe,
    Cleaning,
    Cleaned,
    ReportCleaning,
    About,
    PrivacyPolicy,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// FIX: Import Leaflet and its marker images
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});
// FIX: Import Leaflet and its marker images

export default function App() {
    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/cleanings-near-me"
                        element={<CleaningsNearMe />}
                    />
                    <Route path="/cleaning/:uuid" element={<Cleaning />} />
                    <Route path="/cleaned/:uuid" element={<Cleaned />} />
                    <Route
                        path="/report-cleaning"
                        element={<ReportCleaning />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </QueryClientProvider>
        </>
    );
}
