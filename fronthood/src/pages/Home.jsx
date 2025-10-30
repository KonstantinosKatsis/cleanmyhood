import { Layout, Loader, ErrorMessage, HoodsCarousel } from "../components";
import { useNavigate } from "react-router-dom";
import { useHoods } from "../hooks/useHoods";
import { useCleanedHoods } from "../hooks/useCleanedHoods";

export function Home() {
    const navigate = useNavigate();
    const {
        data: hoods,
        isLoading: hoodsLoading,
        error: hoodsError,
    } = useHoods();
    const {
        data: cleanedHoods,
        isLoading: cleanedLoading,
        error: cleanedError,
    } = useCleanedHoods();

    return (
        <Layout>
            {hoodsLoading || cleanedLoading ? (
                <Loader />
            ) : hoodsError || cleanedError ? (
                <ErrorMessage message="Error loading data. Please try again later." />
            ) : (
                <>
                    <section className="text-center max-w-2xl mx-auto px-4 py-4">
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>CleanMyHood</strong> helps communities
                            across Greece keep their neighborhoods clean. Snap a
                            photo of a spot that needs cleaning, share its
                            location, and we’ll make it visible for volunteers
                            to take action. You can also discover ongoing
                            cleaning events near you and join the effort to make
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
                            Explore neighborhoods that have been recently
                            cleaned by our dedicated volunteers. See the
                            positive impact of community efforts and get
                            inspired to join the movement for a cleaner
                            environment.
                        </p>
                    </section>
                    <HoodsCarousel hoods={cleanedHoods} />
                </>
            )}
        </Layout>
    );
}
