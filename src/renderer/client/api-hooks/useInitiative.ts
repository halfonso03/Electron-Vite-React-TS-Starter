import { AddInitiativeDto, InitiativeDto } from "@common/initiative";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useInitiative = () => {

    const queryClient = useQueryClient();

    const { data: initiatives, isLoading: loadingInitiatives } = useQuery({
        queryKey: ['initiatives'],
        queryFn: async () => {
            const response = await window.electronAPI.getInitiatives();
            const data = response.data;
            return data;
        }
    })

    const createInitiative = useMutation({
        mutationFn: async (data: AddInitiativeDto) => {
            const response = await window.electronAPI.createInitiative(data)
            console.log('{ id: response.data, name: data.name }', { id: response.data, name: data.name })
            return { id: response.data, name: data.name } as InitiativeDto
        },
        onSuccess: (createdInitiative: InitiativeDto) => {
            queryClient.setQueryData(["initiatives"], (old: Initiative[]) => [
                ...old,
                { name: createdInitiative.name, id: createdInitiative.id },
            ]);
        },
    });

    return { initiatives, loadingInitiatives, createInitiative }
}