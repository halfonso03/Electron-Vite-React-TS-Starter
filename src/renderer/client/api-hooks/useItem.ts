// import agent from "../agent"
import { formatItem } from "../helpers/ItemHelpers";
import type { ItemFormData } from "../form-validation-schemas/itemSchema";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ItemDto } from "@common/item";


export const useItem = (id?: number) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // const { data: item, isLoading: loadingItem } = useQuery({
    //     queryKey: ['items', id],
    //     queryFn: async () => {
    //         const response = await agent.get<Item>('/inventory/item/' + id);
    //         const parsedItem = formatItem(response.data);
    //         return parsedItem;
    //     },
    //     enabled: id != null && id != undefined
    // })

    const { mutate: createItem, isPending: isCreating, isSuccess: created } = useMutation({
        mutationFn: async (item: ItemFormData) => {

            console.log('item', item);

            // const response = window.electronAPI.createItem(item); // await agent.post(`inventory`, item)
            // return response.data;
            const item2: ItemDto = { id: 0, hbcNumber: '', description: '', serialNumber: '', created_at: '', itemType: '', itemTypeId: 0, itemStatus: '', itemStatusId: 0 };

            return item2;
        },
        onSuccess: (item: ItemDto) => {
            // console.log('create item', item)
            toast.success('Item created');
            navigate(`/inventory/${item.id}`);
        }
    })

    // const { mutate: updateItem, isPending: isUpdating, isSuccess: updated } = useMutation({
    //     mutationFn: async (item: ItemFormData) => {
    //         const response = await agent.put(`inventory/${item.id}`, item)
    //         return response.data;
    //     },
    //     onSuccess: (item: Item) => {
    //         // console.log('item', item)
    //         toast.success('Item updated');
    //         queryClient.invalidateQueries(
    //             { queryKey: ['items', item.id] });
    //     }
    // })

    // const toggleDisposal = useMutation({
    //     mutationFn: async (id: number) => {
    //         const response = await agent.post(`inventory/item/dispose/${id}`)
    //         return response.data;
    //     },
    //     onSuccess: (item: Item) => {
    //         queryClient.invalidateQueries(
    //             { queryKey: ['items', item.id] });
    //     }
    // })

    return { createItem, isCreating, created };// updateItem, isUpdating, updated, item, loadingItem, toggleDisposal };
}
