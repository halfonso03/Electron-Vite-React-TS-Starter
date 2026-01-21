import { useQuery } from "@tanstack/react-query";

export const useInitiative = () => {

    const { data: initiatives, isLoading: loadingInitiatives } = useQuery({
        queryKey: ['initiatives'],
        queryFn: async () => {
            const response = await window.electronAPI.getInitiatives();
            const data = response.data;
            return data;
        }
    })

    return { initiatives, loadingInitiatives }
}