import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { searchCleanedHoodByUuid } from "../services/HoodService";
import { Layout, Loader, ErrorMessage, CleanedHood } from "../components";

export function Cleaned() {
    const { uuid } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ["hood", uuid],
        queryFn: () => searchCleanedHoodByUuid(uuid).then((res) => res.data),
        staleTime: 5 * 60 * 1000,
    });

    const hood = data?.[0] || null;
    const hoods = data || [];
    return (
        <Layout>
            {isLoading && <Loader />}
            {error && (
                <ErrorMessage message="Error loading data. Please try again." />
            )}
            {hood && <CleanedHood hood={hood} hoods={hoods} />}
        </Layout>
    );
}
