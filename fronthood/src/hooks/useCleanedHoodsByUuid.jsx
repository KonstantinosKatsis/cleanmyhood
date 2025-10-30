import { useQuery } from "@tanstack/react-query";
import { searchCleanedHoodByUuid } from "../services/HoodService";

export function useCleanedHoodsByUuid(uuid) {
    return useQuery({
        queryKey: ["hood", uuid],
        queryFn: async () => (await searchCleanedHoodByUuid(uuid)).data[0],
        staleTime: import.meta.env.QUERY_CLIENT_CACHE_TTL,
    });
}
