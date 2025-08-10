import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import HoodsCarousel from "../components/HoodsCarousel";
import Loader from "../components/Loader";
import hoodService from "../services/HoodService";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [hoods, setHoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHoods = async () => {
            const result = await hoodService.searchHoods();
            setHoods(result.data || []);
            setLoading(false);
        };
        fetchHoods();
    }, []);

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
                <button
                    onClick={() => navigate("/cleanings-near-me")}
                    className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition-colors cursor-pointer"
                >
                    Cleanings Near Me
                </button>
            </section>
            {loading === false ? <HoodsCarousel hoods={hoods} /> : <Loader />}
        </>
    );
}
