import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { searchHoodByUuid } from "../services/HoodService";
import { Layout, Loader, ErrorMessage, HoodDetails } from "../components";

export function Cleaning() {
    const { uuid } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ["hood", uuid],
        queryFn: () => searchHoodByUuid(uuid).then((res) => res.data),
        // staleTime: 5 * 60 * 1000,
    });

    const hood = data?.[0] || null;
    const hoods = data || [];

    return (
        <Layout>
            {isLoading && <Loader />}
            {hood ? (
                <HoodDetails hood={hood} hoods={hoods} />
            ) : error ? (
                <ErrorMessage message="Error loading data." />
            ) : (
                <div className="max-w-7xl mx-auto p-6 flex ">
                    <p>No data available</p>
                </div>
            )}
        </Layout>
    );
}
