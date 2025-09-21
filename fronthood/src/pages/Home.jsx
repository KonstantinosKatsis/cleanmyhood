import { useQuery } from "@tanstack/react-query";
import { Layout, Loader, ErrorMessage, HoodsCarousel } from "../components";
import { searchHoods } from "../services/HoodService";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ["hoods"],
        queryFn: () => searchHoods().then((res) => res.data),
        staleTime: 5 * 60 * 1000, // cache for 5 minutes
    });

    const hoods = data || [];

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return (
            <>
                <div className="text-center py-20 text-red-600">
                    Error loading data. Please try again later.
                </div>
            </>
        );
    }

    return (
        <>
            <Layout>
                <section className="text-center max-w-2xl mx-auto px-4 py-8">
                    <p className="text-lg text-gray-700 mb-6">
                        <strong>CleanMyHood</strong> helps communities across
                        Greece keep their neighborhoods clean. Snap a photo of a
                        spot that needs cleaning, share its location, and we’ll
                        make it visible for volunteers to take action. You can
                        also discover ongoing cleaning events near you and join
                        the effort to make our streets cleaner and greener.
                    </p>
                    <button
                        onClick={() => navigate("/cleanings-near-me")}
                        className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition-colors cursor-pointer"
                    >
                        Cleanings Near Me
                    </button>
                </section>
                {isLoading && <Loader />}
                {error && (
                    <ErrorMessage message="Error loading data. Please try again." />
                )}
                {hoods && <HoodsCarousel hoods={hoods} />}
            </Layout>
        </>
    );
}
