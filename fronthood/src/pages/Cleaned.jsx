import { useParams } from "react-router-dom";
import { useCleanedHoodsByUuid } from "../hooks";
import { Layout, Loader, ErrorMessage, CleanedHood } from "../components";

export function Cleaned() {
    const { uuid } = useParams();
    const { data: hood, isLoading, error } = useCleanedHoodsByUuid(uuid);

    return (
        <Layout>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage message="Error loading data. Please try again." />
            ) : (
                <CleanedHood hood={hood} />
            )}
        </Layout>
    );
}
