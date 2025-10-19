import "./App.css";
import "leaflet/dist/leaflet.css";
import { Home } from "./pages/Home";
import { CleaningsNearMe } from "./pages/CleaningsNearMe";
import { Cleaning } from "./pages/Cleaning";
import { ReportCleaning } from "./pages/ReportCleaning";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { About } from "./pages/About";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

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
