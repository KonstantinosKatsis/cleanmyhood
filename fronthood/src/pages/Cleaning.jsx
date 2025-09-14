import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import hoodService from "../services/HoodService";
import { Layout, Loader, ErrorMessage, HoodDetails } from "../components";

export default function Cleaning() {
    const { uuid } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ["hood", uuid],
        queryFn: () =>
            hoodService.searchHoodByUuid(uuid).then((res) => res.data),
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
            {hood && <HoodDetails hood={hood} hoods={hoods} />}
        </Layout>
    );
}
