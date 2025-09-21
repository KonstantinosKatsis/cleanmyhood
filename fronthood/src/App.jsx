import "./App.css";
import "leaflet/dist/leaflet.css";
import { Home } from "./pages/Home";
import { CleaningsNearMe } from "./pages/CleaningsNearMe";
import { Cleaning } from "./pages/Cleaning";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
                </Routes>
            </QueryClientProvider>
        </>
    );
}
