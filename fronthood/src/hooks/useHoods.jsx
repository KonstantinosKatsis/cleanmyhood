import { useQuery } from "@tanstack/react-query";
import { searchHoods } from "../services/HoodService";

export function useHoods() {
    return useQuery({
        queryKey: ["hoods"],
        queryFn: async () => (await searchHoods()).data,
        staleTime: 5 * 60 * 1000,
    });
}
