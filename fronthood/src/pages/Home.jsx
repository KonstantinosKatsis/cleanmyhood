import { useQuery } from "@tanstack/react-query";
import { Layout, Loader, ErrorMessage, HoodsCarousel } from "../components";
import { searchHoods, searchCleanedHoods } from "../services/HoodService";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    const {
        data: hoodsData,
        isLoading: hoodsLoading,
        error: hoodsError,
    } = useQuery({
        queryKey: ["hoods"],
        queryFn: () => searchHoods().then((res) => res.data),
        staleTime: 5 * 60 * 1000,
    });

    const {
        data: cleanedData,
        isLoading: cleanedLoading,
        error: cleanedError,
    } = useQuery({
        queryKey: ["cleanedHoods"],
        queryFn: () => searchCleanedHoods().then((res) => res.data),
        staleTime: 5 * 60 * 1000,
    });

    if (hoodsLoading || cleanedLoading) {
        return <Loader />;
    }

    if (hoodsError || cleanedError) {
        return (
            <ErrorMessage message="Error loading data. Please try again later." />
        );
    }

    const hoods = hoodsData || [];
    const cleanedHoods = cleanedData || [];

    return (
        <Layout>
            <section className="text-center max-w-2xl mx-auto px-4 py-4">
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
                    className="bg-green-700 text-white px-6 py-3 rounded-full text-lg hover:bg-green-800 transition-colors cursor-pointer"
                >
                    Cleanings Near Me
                </button>
            </section>

            <HoodsCarousel hoods={hoods} />

            <section className="text-center max-w-2xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">
                    Discover Cleaned Hoods
                </h2>
                <p className="text-lg text-gray-700">
                    Explore neighborhoods that have been recently cleaned by our
                    dedicated volunteers. See the positive impact of community
                    efforts and get inspired to join the movement for a cleaner
                    environment.
                </p>
            </section>

            <HoodsCarousel hoods={cleanedHoods} />
        </Layout>
    );
}
