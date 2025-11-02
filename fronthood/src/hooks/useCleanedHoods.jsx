import { useQuery } from "@tanstack/react-query";
import { searchCleanedHoods } from "../services/HoodService";

export function useCleanedHoods() {
    return useQuery({
        queryKey: ["cleanedHoods"],
        queryFn: async () => (await searchCleanedHoods()).data,
        staleTime: import.meta.env.QUERY_CLIENT_CACHE_TTL,
    });
}
